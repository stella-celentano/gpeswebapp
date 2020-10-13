import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventosService } from '../../../shared/services/eventos.service';
import { AuthenticationService } from "../../../shared/services/authentication.service"
import { Router } from '@angular/router';
import { Evento } from 'src/app/shared/models/evento.model';
import { Subscription } from 'rxjs';
import { ModalDialogComponent } from 'src/app/web-components/common/modals/modal-dialog/modal-dialog.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ModalLoadingComponent } from 'src/app/web-components/common/modals/modal-loading/modal-loading.component';
import { scrollPageToTop } from 'src/app/shared/functions/scroll-top';
import { checkUrlAndSetFirstPage, setLastUrl, getLastPage, setLastPage } from 'src/app/shared/functions/last-pagination';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit, OnDestroy {

  private httpReq: Subscription

  noticias: Evento[]

  isLoading: boolean = false
  messageApi: string
  statusResponse: number
  p: number = 1
  total: number
  limit: number
  sortedCollection: any[];
  collection: Evento[]
  sortSelectedItem: any
  modalRef: BsModalRef

  headTableItems: any[] = [
    {
      option: 'Título',
      param: 'titulo'
    },
    {
      option: 'Data Publicação',
      param: 'date'
    }
  ]

  configLoadingModal: ModalOptions = {
    backdrop: 'static',
    keyboard: false,
    initialState: {
      message: "Excluindo notícia...",
      withFooter: false
    }
  }

  constructor(
    private _service: EventosService,
    private r: Router,
    private modal: BsModalService,
    private toastr: ToastrService,
    private _auth: AuthenticationService
  ) {
    checkUrlAndSetFirstPage(this.r.url)
  }

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false
    setLastUrl(this.r.url)

    this.sortSelectedItem = this.headTableItems[1]

    this._service.params = this._service.params.set('columnSort', 'date')
    this._service.params = this._service.params.set('valueSort', 'descending')
    this._service.params = this._service.params.set('page', getLastPage())
    this._service.params = this._service.params.set('limit', '10')

    this.getNoticiasWithParams()
  }

  ngOnDestroy() {
    setLastPage(this.p)
    if (this.httpReq) {
      this.httpReq.unsubscribe()
    }
  }

  get isAdmin() {
    return this._auth.isAdmin
  }

  getNoticiasWithParams() {
    this.isLoading = true
    this.httpReq = this._service.getEventoWithParams('authenticated', 'tmb_cd').subscribe(response => {
      this.statusResponse = response.status

      if (response.status == 200) {
        this.messageApi = response.body['message']
        this.noticias = response.body['data']
        this.p = response.body['page']
        this.total = response.body['count']
        this.limit = response.body['limit']
      }

      this.isLoading = false
    }, err => {
      this.messageApi = err
      this.isLoading = false
    })
  }

  getPage(page: number) {
    this.noticias = null
    scrollPageToTop(page)
    this._service.params = this._service.params.set('page', page.toString())
    this.getNoticiasWithParams()
  }

  onClickSortTable(item: any) {
    this.noticias = null
    this.sortSelectedItem = item
    this._service.params = this._service.params.set('columnSort', item['param'])
    if (this._service.params.get('valueSort') == 'descending') {
      this._service.params = this._service.params.set('valueSort', 'ascending')
    } else {
      this._service.params = this._service.params.set('valueSort', 'descending')
    }
    this.getNoticiasWithParams()
  }

  showEllipsisInTheText(text: string, limit: number): boolean {
    return text.length > limit;
  }

  canDelete(title: string, id: string) {
    const initialState = { message: `Deseja excluir a noticia "${title}" ?` }
    this.modalRef = this.modal.show(ModalDialogComponent, { initialState })
    this.modalRef.content.action.subscribe((answer) => {
      if (answer) {
        this.modalRef = this.modal.show(ModalLoadingComponent, this.configLoadingModal)
        this._service.deleteNoticia(id).subscribe(response => {
          this._service.params = this._service.params.set('page', '1')
          this.getNoticiasWithParams()
          this.modalRef.hide()
          this.showToastrSuccess()
        }, err => {
          this.getNoticiasWithParams()
          this.modalRef.hide()
          this.showToastrError()
        })
      }
    })
  }

  showToastrSuccess() {
    this.toastr.success('A notícia foi excluida com sucesso', null, {
      progressBar: true,
      positionClass: 'toast-bottom-center'
    })
  }

  showToastrError() {
    this.toastr.error('Houve um erro ao excluir a notícia. Tente novamente.', null, {
      progressBar: true,
      positionClass: 'toast-bottom-center'
    })
  }
}

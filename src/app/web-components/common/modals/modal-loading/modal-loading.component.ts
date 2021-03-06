import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnimationOptions } from "ngx-lottie"
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-loading',
  templateUrl: './modal-loading.component.html',
  styleUrls: ['./modal-loading.component.css']
})
export class ModalLoadingComponent {

  @Input() message: string
  @Input() withFooter: boolean = false  
  @Input() condition: any
  @Output() action = new EventEmitter

  options: AnimationOptions = {
    path: 'assets/animations/loading.json',
    autoplay: true,
    loop: false
  }

  styles: Partial<CSSStyleDeclaration> = {
    display: 'block',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  constructor(private _bsModalRef: BsModalRef) { }

  close() {
    this._bsModalRef.hide()
  }

  cancel() {
    this.action.emit(true)
    this.close()
  }

}

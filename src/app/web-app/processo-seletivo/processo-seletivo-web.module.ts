import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { NgxPaginationModule } from "ngx-pagination";
import { ModalModule } from "ngx-bootstrap/modal";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SharedModule } from "./../../shared/shared.module";
import { WebAppModule } from "./../web-app.module";


import { ProcessoSeletivoComponent } from './processo-seletivo.component';

const ROUTES: Routes = [
  { path: '', component: ProcessoSeletivoComponent }
]

@NgModule({
  declarations: [
    ProcessoSeletivoComponent
  ],
  exports: [
    ProcessoSeletivoComponent
  ],
  imports: [
    WebAppModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    NgxPaginationModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    })
  ]
})

export class ProcessoSeletivoWebModule { }
import { Component, OnInit, Input } from '@angular/core';
import { AnimationOptions } from "ngx-lottie"

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() condition: any

  options: AnimationOptions = {
    path: 'assets/animations/error.json',
    autoplay: true,
    loop: false
  }

  styles: Partial<CSSStyleDeclaration> = {
    display: 'block',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  constructor() { }

  ngOnInit() {
  }

}

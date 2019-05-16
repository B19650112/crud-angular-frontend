import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-layout',
  template: `
    <app-header-menu></app-header-menu>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class MenuLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

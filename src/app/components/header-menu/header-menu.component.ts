import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
  styles: [
    `
      :host >>> .tooltip-inner {
        background-color: #009688;
        color: #fff;
      }
      :host >>> .tooltip.top .tooltip-arrow:before,
      :host >>> .tooltip.top .tooltip-arrow {
        border-top-color: #009688;
        border-bottom-color: white;
      }
    `
  ]
})
export class HeaderMenuComponent implements OnInit {
  
  userlogin : string

  constructor(private router : Router) { }

  ngOnInit() {
    this.userlogin = sessionStorage.getItem('userlogin')
  }

  fungsi(){
    sessionStorage.setItem('isLoggedIn', "false");
    this.router.navigate(['/login'])
  }

}

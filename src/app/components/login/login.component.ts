import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginAuthService } from 'src/app/services/loginauth.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  pesanLogin
  token

  @ViewChild('basicModal') basicModal: ModalDirective;
  constructor(private router: Router, private _authService: LoginAuthService) { }

  ngOnInit() {}

  loginUser(username,password) {
    this._authService.getUserDetail(username, password)
      .subscribe(data => {
        if (data.status) {
          if (data.status === 'OK') {
            //set session storage
            var status: string = String(data.status)
            var userlogin: string = String(data.userlogin)
            var passlogin: string = String(data.passlogin)
            var level: string = String(data.level)
            var token: string = String(data.token)
            sessionStorage.setItem('status', status)
            sessionStorage.setItem('userlogin', userlogin)
            sessionStorage.setItem('passlogin', passlogin)
            sessionStorage.setItem('level', level)
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('isLoggedIn', "true");
            this.router.navigate(['/dashboard']);
          } else {
            this.basicModal.show()
            this.pesanLogin = data.message
          }
        } else {
          this.basicModal.show()
          this.pesanLogin = data.message
        }
      })
  }

  windowclose() {
    window.close()
  }

}
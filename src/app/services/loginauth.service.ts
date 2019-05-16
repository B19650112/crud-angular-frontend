import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface myData {
  status: String,
  message: String,
  userlogin: String,
  passlogin: String,
  level:String,
  token: String
}

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  get isloggedin() {
    return this.setLoggedIn
  }
  constructor(private http : HttpClient) {

  }
  getUserDetail(username, password) {
    return this.http.post<myData>('api/api/grp00/ceklogin', { username, password })
  }

}
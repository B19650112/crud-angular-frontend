import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from '../services/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  status: string

  constructor(private Otentifikasi: LoginAuthService, private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let url: string = state.url;
    return this.verifyLogin(url);
  }
  verifyLogin(url): boolean {
    if (!this.isLoggedIn()) {
      this._router.navigate(['login']);
      return false;
    }
    else if (this.isLoggedIn()) {
      return true;
    }
  }
  public isLoggedIn(): boolean {
    let status = false;
    if (sessionStorage.getItem('isLoggedIn') == "true") {
      status = true;
    }
    else {
      status = false;
    }
    return status;
  }
}

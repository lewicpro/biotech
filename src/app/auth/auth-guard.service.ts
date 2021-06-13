import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router:Router) {
    console.log('humu imepita kirahisi')
   }
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null) {
      console.log(localStorage.getItem('guard: '+ 'user'));
      return true;
    }else {
      console.log('here 2');
      this.router.navigate(['login']);
      return false;

    }
  }


}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class EmpresaGuard implements CanActivate {
  constructor(private router: Router) { }

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentType')=='usuario') {
          this.router.navigate(['home/usuario']);
        }

        if (localStorage.getItem('currentType')=='empresa') {
          return true;
        }

        if (localStorage.getItem('currentType')=='cliente') {
          this.router.navigate(['home/cliente']);
        }

        if (localStorage.getItem('currentType')=='admin') {
          this.router.navigate(['home/admin']);
        }
            // not logged in so redirect to login page with the return url




      }
}

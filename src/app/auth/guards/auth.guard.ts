import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { routes } from 'src/app/consts';


@Injectable()
export class AuthGuard implements CanActivate{
  public routers: typeof routes = routes;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = sessionStorage.getItem('auth');
    if (token) {
      return true;
    } else {
      this.router.navigate([this.routers.LOGIN]);
      return false;
    }
  }
}

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlAccessGuard implements CanActivate {
  modules: any;
  constructor(private router: Router, @Inject(DOCUMENT) private document: any){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let dd: any = sessionStorage.getItem('user');
      let data = JSON.parse(dd);
      this.modules =  data.currentUser.Permissions[0].ModulePermission;
      console.log(location.pathname);
    // console.log(location.href);
    // console.log(this.document.location.href);
      this.modules.forEach((element1:any) => {
        element1.Access.forEach((element:any) => {
          console.log("access==>",element.Route)
          if(element.Route === location.pathname){
            return true
          }else{
           return this.router.navigate(['/']);
          }
        });
        // if(element.ModuleName === "MyWorkSpace"){
        //   return true
        // }else if(element.ModuleName === "Administrator"){
        //   return true
        // }else if(element.ModuleName === "Reports"){
        //   return true;
        // }else{
        //  return this.router.navigate(['/']);
        // }
      });
    return true;
  }
  
}

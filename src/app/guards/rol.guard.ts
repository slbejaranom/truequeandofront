import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem("accessToken");        
    if(!token){
      return false;
    }
    let tokenArgs = atob(token).split(":");
    let rol = tokenArgs[1];
    switch(rol){
      case "0":
        return ["/home/admain"].includes(state.url);
      case "1":
        return ["/home/main", "/home/trueques"].includes(state.url);
      case "2":
        return ["/home/olmain"].includes(state.url);
      default:
        return false;
    }
  }
  
}

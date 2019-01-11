import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {TokenStorageService} from "../service/token-storage.service";

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
              private tokenStorage: TokenStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.tokenStorage.getToken()) {
      if (this.tokenStorage.getAuthorities().indexOf('ROLE_ADMIN') != -1) {
        return true;
      } else {
        this.router.navigate(['/admin']);
        return false;
      }
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/admin/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}

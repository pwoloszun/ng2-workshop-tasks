import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { RealEstateDetailsComponent } from "../real-estate-details/real-estate-details.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<RealEstateDetailsComponent> {
  canDeactivate(component: RealEstateDetailsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return window.confirm("Are you sure?");
  }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

// todo entry components

// TODO guards
// details: canDeactivate: LogDeactivateGuard
// edit: canActivate: CanActivateViaPermissionsGuard, canDeactivate: UnsavedDeactivateGuard

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // TODO
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}

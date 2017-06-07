import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealEstateDetailsComponent } from './real-estate-details/real-estate-details.component';
import { RealEstatesComponent } from "./real-estates.component";
import { RealEstateMainComponent } from "./real-estate-main/real-estate-main.component";
import { ConfirmDeactivateGuard } from "./guards/confirm-deactivate.guard";

const routes: Routes = [
  {
    path: 'real-estates',
    component: RealEstatesComponent,
    children: [
      {path: '', component: RealEstateMainComponent},
      {path: ':id', component: RealEstateDetailsComponent, canDeactivate: [ConfirmDeactivateGuard]},
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class RealEstatesRoutingModule {
}

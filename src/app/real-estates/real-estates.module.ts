import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";

import { RealEstatesRoutingModule } from "./real-estates-routing.module";
import { RealEstatesService } from "./shared/real-estates.service";
import { RealEstateDetailsComponent } from "./real-estate-details/real-estate-details.component";
import { RealEstatesComponent } from "./real-estates.component";
import { RealEstateMainComponent } from "./real-estate-main/real-estate-main.component";
import { ConfirmDeactivateGuard } from "./guards/confirm-deactivate.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RealEstatesRoutingModule,
    SharedModule,
  ],
  declarations: [
    RealEstatesComponent,
    RealEstateMainComponent,
    RealEstateDetailsComponent,
  ],
  providers: [
    RealEstatesService,
    ConfirmDeactivateGuard,
  ]
})
export class RealEstatesModule {
}

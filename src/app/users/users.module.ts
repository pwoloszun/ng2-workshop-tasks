import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    UsersRoutingModule,
  ],
  declarations: [
    // TODO: components
  ],
  providers: [
    // TODO: services + guards
  ]
})
export class UsersModule {
}

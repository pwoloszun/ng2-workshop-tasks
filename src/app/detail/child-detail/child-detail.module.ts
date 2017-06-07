import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChildDetailRoutingModule } from './child-detail-routing.module';
import { ChildDetailComponent } from './child-detail.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ChildDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChildDetailRoutingModule,
  ],
})
export class ChildDetailModule {
}

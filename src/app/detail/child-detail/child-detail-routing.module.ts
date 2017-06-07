import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ChildDetailComponent } from './child-detail.component';

const routes = [
  {path: '', component: ChildDetailComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class ChildDetailRoutingModule {
}

export const routedComponents = [];

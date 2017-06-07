import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { DetailComponent } from './detail.component';

const routes = [
  {
    path: '',
    children: [
      {path: '', component: DetailComponent},
      {path: 'child-detail', loadChildren: './child-detail/child-detail.module#ChildDetailModule'}
    ]
  },
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
export class DetailRoutingModule {
}

export const routedComponents = [];

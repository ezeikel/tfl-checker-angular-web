import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { PlannerComponent } from './planner/planner.component';

const routes: Routes =[
  { path: '', component: StatusComponent },
  { path: '/planner', component: PlannerComponent },
  { path: '**', component: StatusComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

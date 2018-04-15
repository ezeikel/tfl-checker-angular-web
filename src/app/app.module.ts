import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { PlannerComponent } from './planner/planner.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    PlannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

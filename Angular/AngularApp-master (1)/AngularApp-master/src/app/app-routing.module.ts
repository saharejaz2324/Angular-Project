import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoglevelListComponent } from './loglevel-list/loglevel-list.component';
const routes: Routes = [
  {path:'loglist',component:LoglevelListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoglevelListComponent]

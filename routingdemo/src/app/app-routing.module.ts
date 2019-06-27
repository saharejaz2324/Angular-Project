import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentListComponent } from './department-list/department-list.component';
import { EmplyeeListComponent } from './emplyee-list/emplyee-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
 
  { path: 'employee', component: EmplyeeListComponent},
  { path:'department', component: DepartmentListComponent  },
  { path:'departments/id', component: DepartmentDetailComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent, EmplyeeListComponent, DepartmentDetailComponent]
 
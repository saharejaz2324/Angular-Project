import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginnComponent } from './loginn/loginn.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailListComponent } from './employee-detail-list/employee-detail-list.component';
import { EmployeeService } from './employee.service';
import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    //LoginnComponent,
    EmployeeListComponent,
    EmployeeDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

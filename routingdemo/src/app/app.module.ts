import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{enableProdMode} from '@angular/core';
enableProdMode();
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DepartmentDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import  apiservice  from "./Services/apiservice";
import {FormsModule} from "@angular/forms";
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [apiservice, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }


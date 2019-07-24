import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowresultComponent } from './showresult/showresult.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { EditDataComponent } from './edit-data/edit-data.component';
const appRoutes: Routes = [
  { path: 'front-page', component: FrontPageComponent },
  { path: 'showresult', component: ShowresultComponent },
  { path: 'edit-data', component: EditDataComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ShowresultComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

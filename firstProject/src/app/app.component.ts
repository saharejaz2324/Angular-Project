import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //identification of the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'firstProject';
  public rollno:any=[1,2,4];
}

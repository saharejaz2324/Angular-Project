import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1> END OF WEEKEND :( </h1>
  <button (click)="btnclick()"> Click Me </button>
  <p [ngStyle]="{'color':'purple','font-weight':'bold'}"> Attribute Directive</p>
  
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Directives';

  btnclick()
  {
    alert("You Clicked Me");
  }
}

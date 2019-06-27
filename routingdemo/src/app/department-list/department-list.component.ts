import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="navbar-" >
    <li *ngFor="let department1 of departments" class="nav-item">
      <a routerLink = "/departments/:{{department1.id}}">{{department1.id}}  {{department1.name}}</a>
      
    </li>
    </ul>
  
    `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments=[
    { "id":1,"name":"Angular"    },
    { "id":2,"name":"NodeJS"    },
    { "id":3,"name":"C++"    },
    { "id":4,"name":"Python"    }
    
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

}

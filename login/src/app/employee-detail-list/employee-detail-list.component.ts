import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail-list',
  template:`
  <h2>Detail List</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}  .  {{employee.name}}    ,    {{employee.age}}</li> 
  </ul>
  `,
  styles:[]
})
export class EmployeeDetailListComponent implements OnInit {
  public employees=[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
   this.employees = this._employeeService.getEmployee();
   
}

}

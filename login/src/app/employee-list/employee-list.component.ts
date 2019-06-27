import { Component, OnInit } from '@angular/core';
import { EmployeeDetailListComponent } from '../employee-detail-list/employee-detail-list.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template:`
  <h2> List of the Employees</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  `,
  styles:[]
})
export class EmployeeListComponent implements OnInit {
public employees=[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees =this._employeeService.getEmployee();
  }

}


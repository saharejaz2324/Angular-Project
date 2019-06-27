import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployee(){
   return [
      {"id": 3046,"name":"Sahar","age":21},
      {"id": 3051,"name":"Tayyaba","age":22},
      {"id": 59,"name":"Adan","age":22}
  ];
    }
}

import { Injectable } from '@angular/core';

/*
  Generated class for the Employees provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Employees {

  employees: any;
  employee: any;

  constructor() { }

  findAll() {

    console.log('--> called Employees.load()');
    if (this.employees) {
      console.log('--> Employees.load() already has data');
      return Promise.resolve(this.employees);
    }

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/employeeAdapter/getEmployees", WLResourceRequest.GET);
      dataRequest.send().then((response) => {
        console.log('--> data loaded from adapter', response);
        this.employees = response.responseJSON.results;
        resolve(this.employees);
      }, (failure) => {
        console.log('--> failed to load data', failure);
        return 'error';
      })
    });
  }

  findById(id) {

    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/employeeAdapter/getEmployeeDetail", WLResourceRequest.GET);
      dataRequest.setQueryParameter("id", id);
      dataRequest.send().then((response) => {
        console.log('--> details loaded from employee adapter');
        this.employee = response.responseJSON.results;
        resolve(this.employee);
      }, (failure) => {
        console.log('--> failed to load employee details', failure);
        return 'error';
      })
    });
  }

}

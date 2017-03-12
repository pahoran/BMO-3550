import {Injectable} from '@angular/core';

class Employee {
  constructor( 
    public _id: string,
    public _rev:   string,
    public first_name: string,
    public last_name: string,
    public address: string,
    public job_title: string,
    public email: string,
    public fax: string,
    public img: string,
    public favorite: string) {} 

}

@Injectable()
export class EmployeeService {

  employees: any = null;

    constructor() {}

    findAll() {
      console.log('--> in employeeService.findAll()');

      return new Promise(resolve => {

        let dataRequest = new WLResourceRequest ("/adapters/employeeAdapter/getEmployees", WLResourceRequest.GET);
        dataRequest.send().then((response) => {
          console.log( '--> data loaded from employeeAdapter');
          this.employees = response.responseJSON.rows;
          resolve(this.employees);
        }, (failure) => {
          console.log( '--> failed to load from employeeAdapter', failure);
          resolve('error');
        })
      });

    }

    findById(id) {
      console.log( '--> in employeeService.findById( ' + id + ')');

      return new Promise(resolve => {

        let dataRequest = new WLResourceRequest ("/adapters/employeeAdapter/getEmployeeDetail/", WLResourceRequest.GET);
        dataRequest.setQueryParameter("params", "['" + id + "']");

        dataRequest.send().then((response) => {
          console.log( '--> data loaded from employeeAdapter');

          let JSONResponse = response.responseJSON;
          let newEmp = new Employee(
            JSONResponse._id,
            JSONResponse._rev,
            JSONResponse._first_name,
            JSONResponse._last_name,
            JSONResponse._address,
            JSONResponse._job_title,
            JSONResponse._email,
            JSONResponse._fax,
            JSONResponse._img,
            JSONResponse._favorite);

          resolve(newEmp);

        }, (failure) => {
          console.log( '--> failed to load from employeeAdapter', failure);
          resolve('error');
        })

      }) 
    }

}
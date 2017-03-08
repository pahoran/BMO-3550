import {Injectable} from '@angular/core';
import employees from './employees';

@Injectable()
export class EmployeeService {

    findAll() {
        return Promise.resolve(employees);
    }

    findById(id) {
      for (var i in employees) {
        if (employees[i]._id == id) {
          return Promise.resolve(employees[i]);
        }
      } 
    }

}
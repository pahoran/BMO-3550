import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Employees } from '../../providers/employees';
import { EmployeeDetailsPage } from '../employee-details/employee-details'

/*
  Generated class for the EmployeeList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-employee-list',
  templateUrl: 'employee-list.html',
  providers: [Employees]
})
export class EmployeeListPage {

  employees: any;

  constructor(public navCtrl: NavController,
    public employeeProvider: Employees) {
    console.log('--> EmployeesList page init');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeListPage');
    this.loadEmployees();
  }

  loadEmployees() {
    console.log('--> EmployeesList page -> loadEmployees()');
    this.employeeProvider.findAll().then((results) => {
      console.log('--> employeeProvider load succeeded');
      this.employees = results;
    }), (failure) => {
      console.log('--> Load Employees call failed: ', failure);
    };

  }

  openEmpDetails(employee) {
    this.navCtrl.push(EmployeeDetailsPage, employee);

  }
}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { EmployeeService } from '../../providers/employee-service';
import { EmployeeDetailPage } from '../employee-detail/employee-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employees: {};

  constructor(public navCtrl: NavController, public employeeService: EmployeeService) { }

  ionViewDidEnter() {
    this.employeeService.findAll().then(
      (data) => { this.employees = data }
    );
  };

  openEmployeeDetail(employee) {
    this.navCtrl.push(EmployeeDetailPage, employee);
  }
}

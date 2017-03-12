import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Employees } from '../../providers/employees';

/*
  Generated class for the EmployeeDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-employee-details',
  templateUrl: 'employee-details.html'
})
export class EmployeeDetailsPage {

  employee: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public employeeService: Employees) {
    this.employee = this.navParams.data;

    employeeService.findById(this.employee._id).then(
      employee => this.employee = employee
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeDetailsPage');
  }

}

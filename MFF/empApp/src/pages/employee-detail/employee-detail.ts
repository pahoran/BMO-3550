import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmployeeService } from '../../providers/employee-service';

@Component({
  selector: 'page-employee-detail',
  templateUrl: 'employee-detail.html'
})
export class EmployeeDetailPage {

  employee: any;
  employeeId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public employeeService: EmployeeService) {
    this.employee = this.navParams.data;
    employeeService.findById(this.employee._id).then(
      (employee) => {this.employee = employee}
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeDetailPage');
  }

  toggleFavorite(employee) {
    if( employee.favorite == "yes") {
      employee.favorite = "no"
    } else {
      employee.favorite = "yes"
    }
  }
}

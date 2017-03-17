import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { EmployeeService } from '../../providers/employee-service';
import { EmployeeDetailPage } from '../employee-detail/employee-detail';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    employees: Array<any>;
    filter = 'all';

    constructor(public navCtrl: NavController, public employeeService: EmployeeService) {
        employeeService.findAll().then(data => this.employees = data);
    }

    openEmployeeDetail(employee) {
        this.navCtrl.push(EmployeeDetailPage, employee);
    }

    toggleFavorites() {
        if (this.filter == 'all') {
            this.employeeService.findAll().then(data => (this.employees = data))
        } else {
            this.employeeService.getFavorites().then(data => (this.employees = data))
        }
    }

}
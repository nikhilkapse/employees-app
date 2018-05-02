import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employeesevice/employee.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  allEmployees: any = null;
  totalEmployees: any = null;
  isSorted: Boolean = false;
  sortColumnName: string = null;
  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.allEmployees = this.empService.getEmployeesList();
    this.totalEmployees = this.allEmployees;
    this.allEmployees.forEach((key) => {
      if (key.phone.match(/[a-z]/i)) {
        key.phone = 'NA';
      }
    });
  }

  addEmployee() {
    this.router.navigate(['/employees/add']);
  }
  editEmployee(id) {
    this.router.navigate(['/employees/edit', id]);
  }
  searchEmployee(event: any) {
    this.allEmployees = _.filter(this.totalEmployees, (o) => {
      return o.name.toLowerCase() === event.target.value.toLowerCase() || o.address.city.toLowerCase() === event.target.value.toLowerCase() })
    if (event.target.value === '') {
      this.allEmployees = this.totalEmployees;
    }
  }
  sortEmployees(sortProperty: string) {
    this.sortColumnName = sortProperty;
    let order;
    if (sortProperty === 'city') {
      sortProperty = 'address.city';
    } else if (sortProperty === 'address_line1') {
      sortProperty = 'address.address_line1';
    } else if (sortProperty === 'address_line2') {
      sortProperty = 'address.address_line2';
    } else if (sortProperty === 'postal_code') {
      sortProperty = 'address.postal_code';
    }
    if (this.isSorted) {
      order = 'desc';
    } else {
      order = 'asc';
    }
    this.isSorted = !this.isSorted;
    this.allEmployees = _.orderBy(this.allEmployees, [sortProperty], [order]);
  }
 }

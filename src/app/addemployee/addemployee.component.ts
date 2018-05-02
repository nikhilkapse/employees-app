import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employeesevice/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  id = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  phone = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  city = new FormControl('', []);
  address1 = new FormControl('', []);
  address2 = new FormControl('', []);
  postalCode = new FormControl('', []);

  addEmployeeForm: FormGroup = this.builder.group({
    id: this.id,
    name: this.name,
    phone: this.phone,
    city: this.city,
    address1: this.address1,
    address2: this.address2,
    postalCode: this.postalCode
  });


  constructor(private empService: EmployeeService, private builder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  addEmployee() {
    this.empService.addEmployee(this.addEmployeeForm.value);
    this.router.navigateByUrl('/employees');
  }
}

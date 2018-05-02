import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employeesevice/employee.service';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {

  id = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  phone = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  city = new FormControl('', []);
  address1 = new FormControl('', []);
  address2 = new FormControl('', []);
  postalCode = new FormControl('', []);

  editEmployeeForm: FormGroup = this.builder.group({
    id: this.id,
    name: this.name,
    phone: this.phone,
    city: this.city,
    address1: this.address1,
    address2: this.address2,
    postalCode: this.postalCode
  });
  empId: any;
  sub: any;
  allEmployees: any;

  constructor(private empService: EmployeeService,
              private builder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.empId = +params['id'];
    });
    this.allEmployees = this.empService.getEmployeesList();
    this.allEmployees.forEach((item) => {
      if (item.id === this.empId) {
        this.editEmployeeForm.controls['id'].setValue(item.id);
        this.editEmployeeForm.controls['name'].setValue(item.name);
        this.editEmployeeForm.controls['phone'].setValue(item.phone);
        this.editEmployeeForm.controls['city'].setValue(item.address.city);
        this.editEmployeeForm.controls['address1'].setValue(item.address.address_line1);
        this.editEmployeeForm.controls['address2'].setValue(item.address.address_line2);
        this.editEmployeeForm.controls['postalCode'].setValue(item.address.postal_code);
      }
    });
  }
  editEmployee() {
    this.empService.editEmployee(this.editEmployeeForm.value);
    this.router.navigateByUrl('/employees');
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

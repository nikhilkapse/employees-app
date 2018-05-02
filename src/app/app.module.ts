import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeService } from './employeesevice/employee.service';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditemployeeComponent } from './editemployee/editemployee.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    AddemployeeComponent,
    EditemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

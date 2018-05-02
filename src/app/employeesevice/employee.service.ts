import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  employees: any = {
    'data' : [
      {
        'id': 1,
        'name': 'Zaira',
        'phone': '898734275',
        'address':
          {
            'city': 'Pune',
            'address_line1': 'ABC road',
            'address_line2': 'XYZ building',
            'postal_code': '12455'
          }
      },
      {
        'id': 2,
        'name': 'Jacob',
        'phone': 'AZ99A99PQ9',
        'address':
          {
            'city': 'Pune',
            'address_line1': 'PQR road',
            'address_line2': 'ABC building',
            'postal_code': '17655'
          }
      },
      {
        'id': 3,
        'name': 'Arihant',
        'phone': '987876457',
        'address':
          {
            'city': 'Mumbai',
            'address_line1': 'ABC road',
            'address_line2': 'XYZ building',
            'postal_code': '12455'
          }
      }
    ]
  };

  constructor() { }
  getEmployeesList() {
    return this.employees.data;
  }
  addEmployee(data: any) {
    const employee = {
      'id': parseInt(data.id),
      'name': data.name,
      'phone': data.phone,
      'address':
        {
          'city': data.city,
          'address_line1': data.address1,
          'address_line2': data.address2,
          'postal_code': data.postalCode
        }
    };
    this.employees.data.push(employee);
  }
  editEmployee(data: any) {
    this.employees.data.forEach((item) => {
      if (item.id === data.id) {
        item.id = data.id;
        item.name = data.name;
        item.phone = data.phone;
        item.address.city = data.city;
        item.address.address_line1 = data.address1;
        item.address.address_line2 = data.address2;
        item.address.postal_code = data.postalCode;
      }
    });
  }
}

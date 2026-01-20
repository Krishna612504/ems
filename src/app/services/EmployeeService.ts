import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'Krishna', department: 'IT', salary: 50000 },
    { id: 2, name: 'Ravi', department: 'HR', salary: 40000 }
  ];

  getEmployees() {
    return this.employees;
  }

  getEmployeeById(id: number) {
    return this.employees.find(e => e.id === id);
  }

  addEmployee(emp: Employee) {
    this.employees.push(emp);
  }

  updateEmployee(emp: Employee) {
    const index = this.employees.findIndex(e => e.id === emp.id);
    this.employees[index] = emp;
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}

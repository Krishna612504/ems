import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/EmployeeService';

@Component({
  selector: 'app-employeelist',
  imports:[CommonModule, RouterModule],
  templateUrl: './employeelist.html',
  styles: [`
    .spacer { flex: 1 1 auto; }
    mat-card { margin: 16px; }
    table { width: 100%; }
  
  `]
})
export class Employeelist {
  employees: any[] = [];
columns: any;
  displyedcolumns: string[] = ['id', 'name', 'department', 'salary', 'actions'];

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }

  delete(id: number) {
    this.empService.deleteEmployee(id);
    this.employees = this.empService.getEmployees();
  }

}

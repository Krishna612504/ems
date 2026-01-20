import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/EmployeeService';
import { ActivatedRoute,Router } from '@angular/router';




@Component({
  selector: 'app-employeeform',
  imports: [CommonModule,FormsModule],
  template: ` <h2>{{ isEdit ? 'Edit' : 'Add' }} Employee</h2>

    <form (ngSubmit)="save()">
      <input type="number" [(ngModel)]="employee.id" name="id" placeholder="ID" required /><br><br>
      <input type="text" [(ngModel)]="employee.name" name="name" placeholder="Name" required /><br><br>
      <input type="text" [(ngModel)]="employee.department" name="department" placeholder="Department" /><br><br>
      <input type="number" [(ngModel)]="employee.salary" name="salary" placeholder="Salary" /><br><br>

      <button type="submit">Save</button>
      <button type="button" (click)="cancel()">Cancel</button>
    </form>`,
  
})
export class Employeeform {

   employee: any = {};
  isEdit = false;

  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.employee = { ...this.empService.getEmployeeById(+id) };
    }
  }

  save() {
    if (this.isEdit) {
      this.empService.updateEmployee(this.employee);
    } else {
      this.empService.addEmployee(this.employee);
    }
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}

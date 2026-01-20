import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/EmployeeService';
import { MatAnchor } from '@angular/material/button';

import { MatTableModule , MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef } from '@angular/material/table';
import {  MatIcon } from '@angular/material/icon';
import {  MatToolbar } from '@angular/material/toolbar';
import {  MatCard } from '@angular/material/card';


@Component({
  selector: 'app-employeelist',
  imports:[MatTableModule,CommonModule, RouterModule, MatAnchor, MatToolbar, MatCard, MatHeaderCellDef, MatCellDef, MatIcon, MatHeaderRowDef, MatRowDef],
  template: `
    <mat-toolbar color="primary">
      <span>Employee Management</span>
      <span class="spacer"></span>
      <button mat-raised-button color="accent" routerLink="/add">
        Add Employee
      </button>
    </mat-toolbar>

    <mat-card>
      <table mat-table [dataSource]="employees">

        
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>ID</th>
          <td mat-cell *matCellDef="let e">{{ e.id }}</td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let e">{{ e.name }}</td>
        </ng-container>

        <ng-container matColumnDef="department">
          <th mat-header-cell *matHeaderCellDef>Department</th>
          <td mat-cell *matCellDef="let e">{{ e.department }}</td>
        </ng-container>

        <ng-container matColumnDef="salary">
          <th mat-header-cell *matHeaderCellDef>Salary</th>
          <td mat-cell *matCellDef="let e">{{ e.salary }}</td>
        </ng-container>

        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Actions</th>
          <td mat-cell *matCellDef="let e">
            <button mat-icon-button color="primary"
                    [routerLink]="['/edit', e.id]">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn"
                    (click)="delete(e.id)">
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displyedcolumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displyedcolumns;"></tr>

      </table>
    </mat-card>
  `,
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

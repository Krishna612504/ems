import { Routes } from '@angular/router';
import { Employeeform } from './components/employeeform/employeeform';
import { Employeelist } from './components/employeelist/employeelist';
export const routes: Routes = [
  { path: '', component: Employeelist },
  { path: 'add', component: Employeeform },
  { path: 'edit/:id', component: Employeeform }
];

import { EmployeesComponent } from './employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectUnauthorizedTo(['fastFood']);

const routes: Routes = [
  {path: '', component: EmployeesComponent, ...canActivate(redirectToLogin) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }

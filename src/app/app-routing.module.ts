import { StartComponent } from './components/start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['fastFood']);

const routes: Routes = [

  { path: '',
    pathMatch: 'full',
    component:LoginComponent

  },

  {path: 'login', component: LoginComponent, ...canActivate(redirectToHome)},
  {path: 'registo', component: SignUpComponent, ...canActivate(redirectToHome)},

  { path: 'fastFood',
  loadChildren: () => import('./components/fast-food/fast-food.module')
  .then(m=>m.FastFoodModule)
},
  {path: 'admin', component: DashboardComponent, children:[

    {path: '', component: StartComponent, ...canActivate(redirectToLogin)},

    {path: 'employees',
    loadChildren: () => import('./components/employees/employees.module')
    .then(m=>m.EmployeesModule)
  },
  {path: 'users',
  loadChildren: () => import('./components/users/users.module')
  .then(m=>m.UsersModule)
},

  {path: 'chat',
    loadChildren: () => import('./components/chat/chat.module')
    .then(m=>m.ChatModule)
  },

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

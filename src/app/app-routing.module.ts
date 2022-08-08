import { StartComponent } from './components/start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [

  { path: '',
    pathMatch: 'full',
    component:LoginComponent

  },

  {path: 'login', component: LoginComponent},
  {path: 'registo', component: SignUpComponent},

  { path: 'fastFood',
  loadChildren: () => import('./components/fast-food/fast-food.module')
  .then(m=>m.FastFoodModule)
},
  {path: 'admin', component: DashboardComponent, children:[

    {path: '', component: StartComponent},

    {path: 'employees',
    loadChildren: () => import('./components/employees/employees.module')
    .then(m=>m.EmployeesModule)
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

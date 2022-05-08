import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path: '', component: HeaderComponent,
  children:[
    {path: '', component: HomeComponent},
    {path: 'search/:item', component: HomeComponent},

    {path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FastFoodRoutingModule { }

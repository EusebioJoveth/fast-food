import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';

const routes: Routes = [
  {path: '', component: HeaderComponent,
  children:[
    {path: '', component: HomeComponent},
    {path: 'search/:item', component: HomeComponent},
    {path: 'tag/:tag', component: HomeComponent},
    {path: 'food/:id', component: FoodPageComponent},

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FastFoodRoutingModule } from './fast-food-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { NotFoundModule } from '../not-found/not-found.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodPageComponent
  ],
  imports: [
    CommonModule,
    FastFoodRoutingModule,
    NgbRatingModule,
    MaterialModule,
    FormsModule,
    NotFoundModule,
    SharedModule
  ]
})
export class FastFoodModule { }

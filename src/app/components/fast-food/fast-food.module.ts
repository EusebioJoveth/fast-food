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


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    FastFoodRoutingModule,
    NgbRatingModule,
    MaterialModule,
    FormsModule
  ]
})
export class FastFoodModule { }

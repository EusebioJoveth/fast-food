import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FastFoodRoutingModule } from './fast-food-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FastFoodRoutingModule,
    NgbRatingModule,
    MaterialModule
  ]
})
export class FastFoodModule { }

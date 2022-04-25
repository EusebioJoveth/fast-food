import { Foods } from 'src/app/models/food';
import { FoodService } from './../../services/food/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Foods[] = []
  starRating = 0;

  constructor(private serviceFood: FoodService) { }

  ngOnInit(): void {
    this.foods = this.serviceFood.getAll();
  }

}

import { Foods } from 'src/app/models/food';
import { FoodService } from './../../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Foods[] = []
  starRating = 0;

  constructor(
    private serviceFood: FoodService,
    private activeRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      if(params['item'])
      this.foods = this.serviceFood.getAll()
      .filter(food => food.name.toLowerCase().includes(params['item'].toLowerCase()));
      else
      this.foods = this.serviceFood.getAll();

    })

  }

}

import { Foods } from 'src/app/models/food';
import { FoodService } from './../../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Foods[] = []
  starRating = 0;

  user$ = this.authService.currentUsers$;

  constructor(
    private serviceFood: FoodService,
    private activeRoute: ActivatedRoute,
    private authService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      if(params['item'])
      this.foods = this.serviceFood.getAll()
      .filter(food => food.name.toLowerCase().includes(params['item'].toLowerCase()));
      else if(params['tag'])
      this.foods = this.serviceFood.getAllFoodByTag(params['tag'])
      else
      this.foods = this.serviceFood.getAll();

    })

  }

}

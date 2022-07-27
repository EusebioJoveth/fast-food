import { Component, Input, OnInit } from '@angular/core';
import { Foods } from 'src/app/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food/food.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!: Foods;
  constructor(
    private activateRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router:Router
    ) {

      activateRoute.params.subscribe((params) =>{
        if(params['id'])
        this.food = foodService.getFoodById(params['id']);
      });
    }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('fastFood/cart-page');
  }

}

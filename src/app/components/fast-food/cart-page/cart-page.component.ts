import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart-item';
import { Cart } from 'src/app/models/cart';
import { FoodService } from '../../../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(
    private cartService: CartService,
    private foodService: FoodService
    ) {

    this.setCart();
  }

  ngOnInit() {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); //Instance Load Date
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    this.cartService.updateQuantity(cartItem.food.id, parseInt(quantityInString));
    this.setCart();
  }

}

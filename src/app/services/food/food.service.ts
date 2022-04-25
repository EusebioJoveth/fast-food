import { Injectable } from '@angular/core';
import { Foods } from 'src/app/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[]{
    return [
     {
       id: 1,
       name: 'Pizza Pepperoni',
       cookTime: '10-20',
       price: 10,
       favorite: true,
       origins: ['italy'],
       star: 3,
       imageUrl: '/assets/images/foods/Pizza.png',
       tags: ['FastFood', 'Pizza']
     },
     {
      id: 2,
      name: 'Batata Doce',
      cookTime: '5-10',
      price: 50,
      favorite: false,
      origins: ['malanje','Uige', 'Cabinda'],
      star: 3.5,
      imageUrl: '/assets/images/foods/02.png',
      tags: ['FastFood','Legume'],
    },
    {
      id: 3,
      name: 'Peixe Carapau',
      cookTime: '15-30',
      price: 2500,
      favorite: true,
      origins: ['luanda'],
      star: 4,
      imageUrl: '/assets/images/foods/03.png',
      tags: ['FastFood', 'Lunch'],
    },
    {
      id: 4.5,
      name: 'Arroz com legume',
      cookTime: '1-10',
      price: 300,
      favorite: false,
      origins: ['zangob 3'],
      star: 5,
      imageUrl: '/assets/images/foods/01.png',
      tags: ['FastFood', 'Lunch'],
    },
    {
      id: 5,
      name: 'Lazanha',
      cookTime: '5-10',
      price: 50,
      favorite: false,
      origins: ['Portugal','França'],
      star: 2.5,
      imageUrl: '/assets/images/foods/02.png',
      tags: ['FastFood','Legume'],
    },
    {
      id: 6,
      name: 'Muss',
      cookTime: '10-20',
      price: 10,
      favorite: true,
      origins: ['italy'],
      star: 1,
      imageUrl: '/assets/images/foods/Pizza.png',
      tags: ['FastFood', 'Pizza']
    },

    ]
  }
}

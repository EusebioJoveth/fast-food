import { Injectable } from '@angular/core';
import { Foods } from 'src/app/models/food';
import { Tag } from 'src/app/models/tag';

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
      id: 4,
      name: 'Arroz com legume',
      cookTime: '1-10',
      price: 300,
      favorite: false,
      origins: ['zangob 3'],
      star: 5,
      imageUrl: '/assets/images/foods/arroz.png',
      tags: ['FastFood', 'Lunch'],
    },
    {
      id: 5,
      name: 'Funge com Muamba',
      cookTime: '5-10',
      price: 50,
      favorite: false,
      origins: ['Angola','Moçambique'],
      star: 2.5,
      imageUrl: '/assets/images/foods/funge.png',
      tags: ['FastFood','Legume'],
    },
    {
      id: 6,
      name: 'Macarrão',
      cookTime: '10-20',
      price: 1200,
      favorite: true,
      origins: ['italy'],
      star: 1,
      imageUrl: '/assets/images/foods/macarrao.png',
      tags: ['FastFood', 'Pizza']
    },
    {
      id: 7,
      name: 'Muss',
      cookTime: '10-20',
      price: 1500,
      favorite: true,
      origins: ['italy'],
      star: 1,
      imageUrl: '/assets/images/foods/03.png',
      tags: ['FastFood', 'Pizza']
    },
    {
      id: 8,
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
      id: 9,
      name: 'Batata Doce',
      cookTime: '5-10',
      price: 50,
      favorite: false,
      origins: ['Kwanza Norte','Uige', 'Malanje'],
      star: 3.5,
      imageUrl: '/assets/images/foods/02.png',
      tags: ['FastFood','Legume'],
    },
    {
      id: 10,
      name: 'Muss',
      cookTime: '10-20',
      price: 1500,
      favorite: true,
      origins: ['italy'],
      star: 1,
      imageUrl: '/assets/images/foods/03.png',
      tags: ['FastFood', 'Pizza']
    },

    ]
  }

  getAllFoodByTag(tag:string):Foods[]{
  return tag == "Todos"?this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));
      //
  }

  getAllTag():Tag[]{
    return [
      {name: 'Todos', count: 14},
      {name: 'FastFood', count:4},
      {name: 'Pizza', count:2},
      {name: 'Lunch', count: 3},
      {name: 'SlowFood', count: 2},
      {name: 'Humburger', count: 1},
      {name: 'Fry', count: 1},
      {name: 'Soup', count: 1},
    ]
  }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
}

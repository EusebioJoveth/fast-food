import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { FoodService } from '../../../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags?:Tag[] = [];

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent?:string = 'center';


  constructor(
    private serviceFood: FoodService
  ) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags =this.serviceFood.getAllTag()

  }

}

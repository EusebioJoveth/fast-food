import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { FoodService } from '../../../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags:Tag[] = [];

  constructor(
    private serviceFood: FoodService
  ) { }

  ngOnInit(): void {
    this.tags =this.serviceFood.getAllTag()
  }

}

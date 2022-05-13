import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  pesquisaComida:string = '';

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
      if(params['item'])
      this.pesquisaComida = params['item'];
    });
  }

  pesquisar():void{
    if(this.pesquisaComida)
    this.router.navigateByUrl('/fastFood/search/'+ this.pesquisaComida)

  }

}

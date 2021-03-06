import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
     private cdr: ChangeDetectorRef,
     private router: Router
     ) { }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.cdr.detectChanges();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.cdr.detectChanges();
      }
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe( ()=> {
      if(this.sidenav.mode === 'over'){
        this.sidenav.close();
      }
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../shared/profile/profile.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  users$ = this.userService.currentUserProfile$;

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    public dialog: MatDialog,
    private userService: UsersService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logot().subscribe(()=>{
      this.router.navigate(['']);
    })
  }

  verPerfil(){
    const dialogRef = this.dialog.open(ProfileComponent, {
    width: '30%'
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {

    })

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthenticationService,
     private route: Router,
     private toast: HotToastService ) { }

  ngOnInit(): void {
  }

  submit(){
    if(!this.loginForm.valid){
      return;
    }

    const{email, password} = this.loginForm.value;
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: "Logado com sucesso",
        loading: "Processando...",
        error: "Verifica a password ou email"
      })
    ).subscribe(()=>{
      this.route.navigate(['/fastFood']);

    })

  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
   return this.loginForm.get('password');
  }

}

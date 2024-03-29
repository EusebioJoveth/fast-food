import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  },
  {validators: passwordsMatchValidator()}
  );

  constructor(
    private authService: AuthenticationService,
     private toast:HotToastService, private router: Router,
     private userService: UsersService
     ) { }

  ngOnInit(): void {
  }

  submit(){
    if(!this.signUpForm.valid) return;

    const {name, email, password} = this.signUpForm.value;
    this.authService.signUp(email, password).pipe(
      switchMap(({user: {uid} }) => this.userService.addUser(
        {uid, email, name}
      )),
      this.toast.observe({
        success: 'Conta criada com sucesso!',
        loading: 'Entrando...',
        error: ({message}) => `${message}`
      })
    ).subscribe(() => {

      this.router.navigate(['/fastFood']);
    })

  }

  get name(){return this.signUpForm.get('name');}
  get email(){return this.signUpForm.get('email');}
  get password(){return this.signUpForm.get('password');}
  get confirmPassword(){return this.signUpForm.get('confirmPassword');}


}

export function passwordsMatchValidator():ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return {
        passwordsDontMatch: true
      }
    }

    return null;
  }
}

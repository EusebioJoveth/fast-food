import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectUnauthorizedTo(['fastFood']);

const routes: Routes = [
  {path: '', component: ChatComponent, ...canActivate(redirectToLogin) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }

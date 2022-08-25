import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile, UserInfo } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from, switchMap, Observable, concat, concatMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }

  currentUsers$ = authState(this.auth);

  login(username:string, password:string){
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  signUp( email:string, password:string){
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  updateProfileData(profileData: Partial<UserInfo>): Observable <any>{
    const user = this.auth.currentUser;

    return of(user).pipe(
      concatMap((user) => {
        if(!user) throw new Error('Não Autenticado')
        return updateProfile(user, profileData);
      })
    );
  }

  logot(){
    return from(this.auth.signOut());
  }
}

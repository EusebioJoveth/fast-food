import { Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { ProfileUser } from '../models/user-profile';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore, private serviceAthentication: AuthenticationService) { }

  get currentUserProfile$(): Observable<ProfileUser | null>{

    return this.serviceAthentication.currentUsers$.pipe(
      switchMap(user=>{
        if(!user?.uid){
          return of(null);
        }

        const ref = doc(this.firestore, 'users', user.uid);
        return docData(ref) as Observable<ProfileUser>; // docData => retorna os dados em tempo real
      })
    )

  }

  addUser(user: ProfileUser):Observable<any>{
    const ref = doc(this.firestore, 'users', user?.uid);
    return from(setDoc(ref, user)); //setDoc Cria novo documento, updateDoc actualiza dados do documento
  }
  updateUser(user: ProfileUser):Observable<any>{
    console.log(user)
    const ref = doc(this.firestore, 'users', user?.uid);
    return from(updateDoc(ref, {...user})); //setDoc Cria novo documento, updateDoc actualiza dados do documento
  }
}

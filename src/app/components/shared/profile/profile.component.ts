import { Component, Inject, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ImageUploadService } from '../../../services/image-upload.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '@angular/fire/auth';
import { UsersService } from '../../../services/users.service';
import { UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$ = this.authService.currentUsers$;

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    adress: new FormControl(''),


  });

  constructor(
    private authService: AuthenticationService,
    private serviceUpload: ImageUploadService,
    private toast: HotToastService,
    private userService: UsersService,
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  ngOnInit(): void {
    this.userService.currentUserProfile$.pipe(
      untilDestroyed(this)
    ).
    subscribe((user) =>{
      this.profileForm.patchValue({...user});
    })
  }

  uploadImage(event:any, user:any){
    console.log(event, user)
  }

  updateProfile(user:any){

   const profileData = this.profileForm.value;
   profileData.uid = user

   this.userService.updateUser(profileData).pipe(
    this.toast.observe({
      loading: 'Actualizando dados',
      success: 'Dados actualizados com sucesso!',
      error: 'Ocorreu um erro ao actualizar'
    })
   ).subscribe();

  }

  cancelar(){
    this.dialogRef.close();
  }

}

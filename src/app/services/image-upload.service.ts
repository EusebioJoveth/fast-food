import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';
import {getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage: Storage) { }

  upload(image:File, path:string):Observable <string>{
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));

    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref))
    );
  }
}

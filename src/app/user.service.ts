import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user :any;

    constructor(private httpClient:HttpClient,private destroyRef:DestroyRef) {

     }

     loadUserDetails(userId:number){
      return this.httpClient.get(`https://fakestoreapi.com/users/${userId}`).pipe(
        tap({
          next:(userDetails:any)=>this.user=userDetails
        })
      )
     };



}

import { UserService } from './../../user.service';
import { USERTYPE } from './../../models/userType';
import { HttpClient } from '@angular/common/http';
import { CartsService } from './../carts/carts.service';
import { Component, computed, DestroyRef, inject, input, signal } from '@angular/core';
import {  ActivatedRouteSnapshot, CanMatchFn, RedirectCommand, ResolveFn, Router, RouterState, RouterStateSnapshot } from '@angular/router';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user =signal<USERTYPE|undefined>(undefined);
  message= input<string>()
  constructor (private cartsService :CartsService,private httpClient:HttpClient,private destroyRef:DestroyRef){  }
  ngOnInit(){
    console.log(this.message);
    
    // console.log("userName ",this.cartsService.userName);
    
    const subscription = this.cartsService.addUser()
    .subscribe({
      next:(userDetails)=>{
        console.log(userDetails);
        if(userDetails){
          
          this.user.set(userDetails)
          console.log("enter", this.user());
          console.log(this.user());
          
        }
    // console.log(this.user());

      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("completed");
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())


    // console.log(this.user());
    
  }


}


export  const getUserDetails:ResolveFn<string> = (activatedRoute:ActivatedRouteSnapshot, routerState:RouterStateSnapshot)=>{

  const httpClient = inject(HttpClient);
   const cartsService = inject(CartsService);

   let user={};
  const res=  httpClient.get('https://fakestoreapi.com/users').subscribe({
    next:(val)=>{
      user=val
    }
  });
  console.log("Result ", user)
  

return 'mohit'
}
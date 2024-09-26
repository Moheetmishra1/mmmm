import { USERTYPE } from './../../models/userType';
import { HttpClient } from '@angular/common/http';
import { CartsService } from './../carts/carts.service';
import { Component, computed, DestroyRef, inject, Input, input, signal } from '@angular/core';
import {  ActivatedRouteSnapshot, CanMatchFn, RedirectCommand, ResolveFn, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) username !:string;
  user = signal<USERTYPE|undefined>(undefined);

  private userService= inject(UserService)
  private destroyRef= inject(DestroyRef)
  message= input<string>()

  ngOnInit(){
    const subscription = this.userService.getUser(this.username)
        .subscribe({
          next:(userData)=>{
            console.log(userData);
            
            if(userData)
            this.user.set(userData)}
        })
        this.destroyRef.onDestroy(()=>subscription.unsubscribe())
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
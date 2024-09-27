import { USERTYPE } from './../../models/userType';
import { HttpClient } from '@angular/common/http';
import { CartsService } from './../carts/carts.service';
import { Component, computed, DestroyRef, inject, Input, input, signal } from '@angular/core';
import {  ActivatedRouteSnapshot, CanMatchFn, RedirectCommand, ResolveFn, Router, RouterOutlet, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) username !:string;
  user = signal<USERTYPE|undefined>(undefined);

  private userService= inject(UserService)
  private router= inject(Router)
  private destroyRef= inject(DestroyRef)
  message= input<string>()
   updateDetails='Edit'

  ngOnInit(){
    console.log(this.userService);
    
    const subscription = this.userService.getUser(this.username)
        .subscribe({
          next:(userData)=>{
            console.log(userData);
            
            if(userData)
            this.user.set(userData)}
        })
        this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }

  updateProfile(){
    let newUrl= this.updateDetails=== 'Edit'?'update':'details'
    this.updateDetails=this.updateDetails==='Edit' ? 'Details':"Edit"
    this.router.navigate(['user',this.username, newUrl]);

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
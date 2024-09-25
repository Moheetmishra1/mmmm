import { HttpClient } from '@angular/common/http';
import { CartsService } from './../carts/carts.service';
import { Component, DestroyRef, inject } from '@angular/core';
import { USERTYPE } from '../../models/userType';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user:USERTYPE|{}={};
  constructor (private cartsService :CartsService,private httpClient:HttpClient,private destroyRef:DestroyRef){  }

  ngOnInit(){
    console.log();
    
    const subscription = this.cartsService.addUser()
    .subscribe({
      next:(userDetails)=>{
        this.user=userDetails
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("completed");
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }


}

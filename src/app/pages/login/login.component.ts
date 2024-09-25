import { Component, DestroyRef, inject, signal } from '@angular/core';
import { LogoComponent } from "../../logo/logo.component";
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CartsService } from '../carts/carts.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent,FormsModule,NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  year= new Date().getFullYear()
  submitError=signal<string>('')
  private httpClient= inject(HttpClient)
  private destoryRef= inject(DestroyRef)
  private router = inject(Router)
  private cartsService= inject(CartsService)
  // authenticationError  = signal({error:false,messege:''})

  eee=''
  get authenticationError(){
    return this.eee
  }

  onSubmit(formData:NgForm){
    this.eee=''
    console.log(formData.form.valid);
    this.submitError.set("")

    setTimeout(()=>
    this.submitError.set("")

        ,2000) 
    
    if(!(formData.value.email && formData.value.password)){
      this.submitError.set("All fields are mandatory.")
      return ;
    }
    console.log(formData);
    
    if((formData.status==='INVALID')){
      this.submitError.set('Form field is not valid')
      return ;
    }

    const subscription = this.httpClient.post('https://fakestoreapi.com/auth/login',{
                username: formData.form.value.email,
                password: formData.form.value.password 
        })
        .subscribe({
          next:(data)=>{
            window.sessionStorage.setItem('token',JSON.stringify(data));
              const subscription = this.cartsService.addUser(formData.form.value.email)
              .subscribe({
                error:(err)=>{
                
                  
                  console.log(err.message);
                },
                complete:()=>{
                  console.log('Login succcessfully');
                }
              })
        this.destoryRef.onDestroy(()=>subscription.unsubscribe())

            this.router.navigate(['../'])
          },
          error:(err)=>{
            // this.authenticationError.set({error:true,messege:"Authenticayion error."})
            this.eee=err.error
            // console.log(this.authenticationError());
            console.log(err);
            
          }
        })
        this.destoryRef.onDestroy(()=>subscription.unsubscribe())

   
  }
  
  removeError(){
    console.log("enter");
    
    this.eee=''
  }

}

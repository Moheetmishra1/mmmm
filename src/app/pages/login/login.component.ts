import { Component, DestroyRef, inject, signal } from '@angular/core';
import { LogoComponent } from "../../logo/logo.component";
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent,FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  year= new Date().getFullYear()
  submitError=signal<string>('')
  private httpClient= inject(HttpClient)
  private destoryRef= inject(DestroyRef)
  private router = inject(Router)

  onSubmit(formData:NgForm){
    console.log("click");
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
                username: "mor_2314",
                password: "83r5^_" 
        })
        .subscribe({
          next:(data)=>{
            window.sessionStorage.setItem('token',JSON.stringify(data));
            this.router.navigate(['../'])
          }
        })
        this.destoryRef.onDestroy(()=>subscription.unsubscribe())

   
  }
  


}

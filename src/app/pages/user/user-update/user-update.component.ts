import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  standalone:true,
  imports:[ReactiveFormsModule,NgIf,FormsModule],
  templateUrl: 'user-update.component.html',
  styleUrls: ['user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
 
  signUpForm: FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15),Validators.pattern('[a-zA-Z0-9_]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6) , Validators.maxLength(15)  ]),
      name: new FormGroup({
        firstname: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+')]),
        lastname: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+')])
      }),
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        number: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required),
        geolocation: new FormGroup({
          lat: new FormControl('', Validators.required),
          long: new FormControl('', Validators.required)
        })
      }),
      phone: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    console.log(this.signUpForm?.value);
  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-update',
  standalone:true,
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class UserUpdate implements OnInit {
  profileForm  !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      email: ['John@gmail.com', [Validators.required, Validators.email]],
      username: ['johnd', Validators.required],
      password: ['m38rmF$', Validators.required],
      name: this.formBuilder.group({
        firstname: ['John', Validators.required],
        lastname: ['Doe', Validators.required]
      }),
      address: this.formBuilder.group({
        city: ['kilcoole', Validators.required],
        street: ['7835 new road', Validators.required],
        number: [3, Validators.required],
        zipcode: ['12926-3874', Validators.required],
        geolocation: this.formBuilder.group({
          lat: ['-37.3159', Validators.required],
          long: ['81.1496', Validators.required]
        })
      }),
      phone: ['1-570-236-7033', Validators.required],
      image: [null]
    });
  }

  get email() { return this.profileForm.get('email'); }
  get username() { return this.profileForm.get('username'); }
  get password() { return this.profileForm.get('password'); }
  get firstname() { return this.profileForm.get('name.firstname'); }
  get lastname() { return this.profileForm.get('name.lastname'); }
  get city() { return this.profileForm.get('address.city'); }
  get street() { return this.profileForm.get('address.street'); }
  get number() { return this.profileForm.get('address.number'); }
  get zipcode() { return this.profileForm.get('address.zipcode'); }
  get lat() { return this.profileForm.get('address.geolocation.lat'); }
  get long() { return this.profileForm.get('address.geolocation.long'); }
  get phone() { return this.profileForm.get('phone'); }
  get image() { return this.profileForm.get('image'); }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
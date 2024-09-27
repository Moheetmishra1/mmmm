import { Component, inject, Input, signal } from '@angular/core';
import { USERTYPE } from '../../../models/userType';
import { CartsService } from '../../carts/carts.service';
import { UserService } from '../user.service';
import { sign } from 'crypto';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
// @Input({required:true}) user !:USERTYPE;
private userService= inject(UserService)
user =this.userService.user
ngOnInit(){
  console.log(this.userService.user);
  // this.user.set()
  

}
}

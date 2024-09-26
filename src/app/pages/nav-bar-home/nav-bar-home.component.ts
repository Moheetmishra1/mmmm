import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartsService } from '../carts/carts.service';

@Component({
  selector: 'app-nav-bar-home',
  standalone: true,
  imports: [RouterLink ,NgIf],
  templateUrl: './nav-bar-home.component.html',
  styleUrl: './nav-bar-home.component.css'
})
export class NavBarHomeComponent {
  isVisibile=false;
  private cartsService=inject(CartsService)
  private router = inject(Router)
  userName=this.cartsService.userName

  OnVisible(){
    this.isVisibile=!this.isVisibile
  }
  logout(){
    this.cartsService.userName=''
    this.router.navigate(['login'])
  }
}

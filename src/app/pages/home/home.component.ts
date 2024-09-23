import { HomeService } from './home.service';
// import { images } from './../../../assets/login-images/images';
import { Component, computed, DestroyRef, Inject, inject, OnInit, signal } from '@angular/core';
import { NavBarHomeComponent } from "../nav-bar-home/nav-bar-home.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { shoppingHeader } from '../../../assets/products-images';
import { NgFor, NgIf } from '@angular/common';
import { LoginComponent } from "../login/login.component";
import { LogoComponent } from "../../logo/logo.component";
import { SliderComponent } from "../../slider/slider.component";
import { HttpClient } from '@angular/common/http';
import { CartComponent } from "../../cart/cart.component";

// import {shoppingHeader} from "../../../assets/products-images"


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarHomeComponent, NavbarComponent, NgFor, LoginComponent, LogoComponent, SliderComponent, CartComponent,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {

  homeService= inject(HomeService);

  // private httpClient=Inject(HttpClient)
  bannerImgs:{img:string,height:string,width:string}[] = shoppingHeader;
  products = this.homeService.products
  private destroyRef = inject(DestroyRef)
  isLoading = signal<boolean>(false)


  ngOnInit(){
    this.isLoading.set(true);
  const subscription =   this.homeService.getAllProducts('https://fakestoreapi.com/products')
    .subscribe({
      next:(productsList:any)=>{
        this.products.set(productsList);
      this.isLoading.set(false);
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
    console.log(this.products());
    
  }
}

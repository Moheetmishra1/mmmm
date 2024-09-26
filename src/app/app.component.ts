import { Component, computed, ElementRef, inject, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NavBarHomeComponent } from './pages/nav-bar-home/nav-bar-home.component';
import { CartsService } from './pages/carts/carts.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,NavBarHomeComponent,NgIf ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bazaar';
  @ViewChild('hiddenNav') hiddenNav ?:ElementRef<NavbarComponent>;
  cartsService= inject(CartsService)
get userName (){
  return this.cartsService.userName
}
  showNav(){
    console.log("enter");
   
  }
    
}

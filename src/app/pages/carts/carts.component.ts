import { CartsService } from './carts.service';
import { Component, inject, signal } from '@angular/core';
import { CartsHeaderComponent } from './carts-header/carts-header.component';
import { CartsNotificationComponent } from './carts-notification/carts-notification.component';
import { CartsTableComponent } from './carts-table/carts-table.component';
import { CartsItemComponent } from './carts-item/carts-item.component';
import { NgFor } from '@angular/common';
import { CARTS } from './carts.model';
import { CartsTotalComponent } from "./carts-total/carts-total.component";

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CartsHeaderComponent, CartsNotificationComponent, CartsTableComponent, CartsItemComponent, NgFor, CartsTotalComponent],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  cartsService =inject(CartsService);
  allproduct=this.cartsService.allCarts
}

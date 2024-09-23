import { Component } from '@angular/core';
import { CartsHeaderComponent } from './carts-header/carts-header.component';
import { CartsNotificationComponent } from './carts-notification/carts-notification.component';
import { CartsTableComponent } from './carts-table/carts-table.component';
import { CartsItemComponent } from './carts-item/carts-item.component';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CartsHeaderComponent,CartsNotificationComponent,CartsTableComponent,CartsItemComponent],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {

}

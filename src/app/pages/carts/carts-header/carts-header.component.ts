import { Component, computed, inject } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-carts-header',
  standalone: true,
  imports: [],
  templateUrl: './carts-header.component.html',
  styleUrl: './carts-header.component.css'
})
export class CartsHeaderComponent {
private cartsService = inject(CartsService)
totalType= computed(()=>this.cartsService.allCarts().length)
}

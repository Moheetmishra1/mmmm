import { Component, Input } from '@angular/core';
import { PRODUCT } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  @Input({required:true}) productId !:string;
  product !:PRODUCT|{};

  constructor(private httpClient:HttpClient){
    // this.product.
  }

}

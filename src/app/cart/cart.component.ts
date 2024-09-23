import { Component, inject, Input } from '@angular/core';
import { PRODUCT } from '../models/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input({required:true}) product ?:PRODUCT |undefined;
  // private router = inject(Router)
  private router = inject(Router)

  star=''
  ngOnInit(){
    let st=""
    console.log(this.product?.rating.rate);
    
    for(let i=0;i<(this.product?.rating.rate||0);++i){
        st+='⭐'
    }
    this.star=st
    console.log(this.product);
    
  }

    onViewProducts(){
      console.log(this.product?.id);
      this.router.navigate(['view',this.product?.id],{
        
      });
    }
    onCart(){

    }
}

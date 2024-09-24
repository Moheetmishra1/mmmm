import { HttpClient } from '@angular/common/http';
import { Component, computed, DestroyRef, inject, Input, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { PRODUCT } from '../../models/product';
import { CurrencyPipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { CartsService } from '../carts/carts.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NgFor,CurrencyPipe],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
  // encapsulation:ViewEncapsulation.None
})
export class ViewComponent implements OnInit {
  @Input({required:true}) productId ?:string;
   product !:PRODUCT; 
   imagePath = computed(()=>this.product)
   cartsService= inject(CartsService)

   private httpClient= inject(HttpClient)
   private destroyRef= inject(DestroyRef)
   private router = inject(Router)
  star = computed(()=>{
    let s=''
    for(let i=0;i<=this.product.rating.rate;++i){
      s+="⭐"
    }
    return s
  })

  ngOnInit(){
    const subscription = this.httpClient.get<PRODUCT>(`https://fakestoreapi.com/products/${this.productId}`,{
      observe:'response'
    }).subscribe({
      next:(ValData)=>{
        if(ValData.body){
          console.log(ValData.body);
          
          this.product=ValData.body;
        }
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }

  backToHome(){
    this.router.navigate([''])
  }

  onAddToCart(){
    const subscription =  this.cartsService.addCartToBackend(this.product).subscribe({

      next:(data)=>{
        console.log(data);
        console.log("products has been added.")
      },
      error:(err)=>{
        console.log(err);        
      },
      complete:()=>{
        console.log("Product is added");
        
      }
     });
     this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }

  updateProduct(){
    this.router.navigate(['products',this.product.category,'updateproduct',this.product.id])
  }
}

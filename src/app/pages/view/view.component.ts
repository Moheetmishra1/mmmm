import { HttpClient } from '@angular/common/http';
import { Component, computed, DestroyRef, inject, Input, OnInit, signal } from '@angular/core';
import { PRODUCT } from '../../models/product';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  @Input({required:true}) productId ?:string;
   product !:PRODUCT; 
   imagePath = computed(()=>this.product)

   private httpClient= inject(HttpClient)
   private destroyRef= inject(DestroyRef)
   private router = inject(Router)


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
}

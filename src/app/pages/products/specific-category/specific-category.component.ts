import { Component, computed, DestroyRef, inject, input, OnChanges, signal } from '@angular/core';
// import { PRODUCT } from '../../../models/product';
import { SpecificCategoryService } from './specific-category.service';
import { CartComponent } from '../../../cart/cart.component';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-category',
  standalone: true,
  imports: [CartComponent,NgFor,CommonModule],
  templateUrl: './specific-category.component.html',
  styleUrl: './specific-category.component.css'
})
export class SpecificCategoryComponent implements OnChanges {
  category=input.required<string>()
  errorMessage ?:string;
  private specificService= inject(SpecificCategoryService);
  products= this.specificService.allProducts || []
  private destroyRef= inject(DestroyRef)
  fallbackMessage=signal<boolean>(false)

  ngOnChanges(){
    // console.log("enetr");
    
    this.fallbackMessage.set(true);
      const subscription = this.specificService.getAllProducts(`https://fakestoreapi.com/products/category/${this.category()}`,`Unable to fecting the ${this.category} products1`)
                            .subscribe({
                              error:(error)=>{
                                  this.errorMessage= error.message
                              },
                              complete:()=>{ this.fallbackMessage.set(false)
                                  console.log(this.products(),this.category());
                              }                            }) ;
          this.destroyRef.onDestroy(()=>subscription.unsubscribe())
        }

  // ngOnInit(){
  //   this.fallbackMessage.set(true);
  //     const subscription = this.specificService.getAllProducts(`https://fakestoreapi.com/products/category/${this.category()}`,`Unable to fecting the ${this.category} products1`)
  //                           .subscribe({
  //                             error:(error)=>{
  //                                 this.errorMessage= error.message
  //                             },
  //                             complete:()=>{ this.fallbackMessage.set(false)
  //                                 console.log(this.products(),this.category());
  //                             }                            }) ;
  //         this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  //       }
}

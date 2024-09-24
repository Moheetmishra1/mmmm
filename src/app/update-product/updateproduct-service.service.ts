import { inject, Injectable } from '@angular/core';
import { PRODUCT } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { UPDATEPRODUCTTYPE } from '../../shared/UpdateType';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateproductServiceService {
  updatedProduct:PRODUCT[]=[]
  private htppClient = inject(HttpClient)
  constructor() { }

  updateProduct(updateProduct:UPDATEPRODUCTTYPE,product:PRODUCT){
    return this.htppClient.put< {
      id:number,
      title:string,
      price:string,
      category:string,
      description:string,
      image:string
  }>(`https://fakestoreapi.com/products/${product.id}`,updateProduct).pipe(
      tap({
        next:(ValData)=>{
          console.log("Products is updated",ValData);
          
          let index = this.updatedProduct.findIndex(a=>a.id=== product.id);
          this.updatedProduct[index]={...this.updatedProduct[index],...updateProduct};
          this.updatedProduct=[...this.updatedProduct]
        }
      })
    )
  }
}

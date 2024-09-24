import { PRODUCT } from './../../models/product';
import { computed, inject, Injectable, signal } from "@angular/core";
import { CARTS } from './carts.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root',

})


export class CartsService {
    allCarts=signal<CARTS[]>([]);
    private httpClient = inject(HttpClient)

    total = computed(()=> this.allCarts().reduce((a,b)=>{
        return (a+b.price*b.quantity)
    },0))

    addproductToCart(product:PRODUCT){
        const prev = this.allCarts()
        const index = this.allCarts().findIndex(prod=>prod.id=== product.id);
        if(index>=0){
            this.allCarts.update((carts=>carts.map((cart,idx)=>{
                if(idx=== index){
                    cart.quantity+=1;
                    return cart;
                }
                return cart;
            })))
        }else{
            this.allCarts.update(carts=>[...carts,{...product,quantity:1}])
        }
        console.log(this.allCarts());

        return this.httpClient.post('https://fakestoreapi.com/carts')
        
    }



}
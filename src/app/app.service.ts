import { Injectable, signal } from "@angular/core";
import { PRODUCT } from "./models/product";

@Injectable({
    providedIn:'root'
})

export class AppService{
    cartPoducts= signal<PRODUCT[]|[]>([])


    addproductToCart(product:PRODUCT){
        this.cartPoducts.update(cart=>[...this.cartPoducts(),product])
    }

    
}
import { inject, Injectable, signal } from "@angular/core";
import { PRODUCT } from "../../../models/product";
import { HttpClient } from "@angular/common/http";
import { catchError, tap, throwError } from "rxjs";


@Injectable({
   providedIn:'root'
})

export class SpecificCategoryService{
    products= signal<PRODUCT[]>([])
    httpClient = inject(HttpClient);
    allProducts = this.products.asReadonly()  

    getAllProducts(url:string,error:string){        
        return this.httpClient.get<PRODUCT[]>(url)
        .pipe( tap({
            next:(ValData)=>{this.products.set(ValData); console.log(ValData)}
        }))
    }

}
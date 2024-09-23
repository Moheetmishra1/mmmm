import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable, OnInit, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService  {

  products =signal<any>([])
  // allProducts=this.products();

  constructor(private httpClient:HttpClient,private destroyRef:DestroyRef) {   }

  getAllProducts(url:string) {
   return this.httpClient.get(url);
  
  }
}

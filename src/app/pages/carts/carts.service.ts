import { PRODUCT } from './../../models/product';
import { computed, inject, Injectable, signal } from "@angular/core";
import { CARTS, USER } from './carts.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';


@Injectable({
    providedIn:'root',
    

})


export class CartsService {
    allCarts=signal<CARTS[]>([]);
    user=signal<USER|{}>({})
    userName=''
    totalItem=computed(()=>this.allCarts().reduce((res,cart)=> res+cart.quantity,0))
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
        
       
    }
    addCartToBackend(product:PRODUCT){
        return this.httpClient.post('https://fakestoreapi.com/carts',{
            userId :0,
            date:'2020-02-03',
            products:[{productId:5,quantity:1},{productId:1,quantity:5}]
        }).pipe(
            tap({
                next:()=>  this.addproductToCart(product)
            })
        )
    }
    addUser(){
        console.log("enter to add user");
        
        return this.httpClient.get<USER[]>('https://fakestoreapi.com/users')
        .pipe(
            tap({
                next:(users)=>{
                    console.log(users);
                    
                const obj=users.find(a=>a.username===this.userName)
                if(obj){
                    this.user.set(obj)
                }
                }
            }),
            map(a=>a.find(user=> user.username=== this.userName))
        )
    }


    
    deleteCart(productId:number){

        return this.httpClient.delete('https://fakestoreapi.com/carts/6').pipe(
            tap({
                next:()=> {this.allCarts.set(this.allCarts().filter(a=> a.id !== productId))}
            })
        )
    }

    updateCart(productId:number,val:string){
       

        return this.httpClient.put('https://fakestoreapi.com/carts/7',{
            userId:3,
            date:2019-12-10,
            products:[{productId:1,quantity:3}]
        }).pipe(
            tap({
                next:()=>{
                    this.allCarts.update((carts)=> carts.map(a=>{
                    if(productId=== a.id){
                        if(val=== 'increase'){
                           a.quantity+=1
                            return a
                        }else{
                            a.quantity-=1
                        }
                    }
                    return a;
                }))}
            })
        )
    }

}
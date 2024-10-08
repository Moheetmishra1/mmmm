import { Component, DestroyRef, inject, Input } from '@angular/core';
import { CARTS } from '../carts.model';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-carts-item',
  standalone: true,
  imports: [],
  templateUrl: './carts-item.component.html',
  styleUrl: './carts-item.component.css'
})
export class CartsItemComponent {
  @Input({required:true}) product !:CARTS;
  private cartsService= inject(CartsService)
  private destroyRef=inject(DestroyRef)

  deleteCart(){
    console.log("click");
    
    const subscription = this.cartsService.deleteCart(this.product.id).subscribe({
      next:(data)=> console.log('data',data)
    })
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }

  updateCart(val:string){
    let index= this.cartsService.allCarts().findIndex(a=>a.id===this.product.id)
                    console.log("index is ",index, val);
                    
    if(  this.cartsService.allCarts()[index].quantity=== 1 && val==='decrease'){
        this.cartsService.allCarts.update(carts=> carts.filter(a=> a.id!== this.product.id))
        console.log(this.cartsService.allCarts());
        
    } else{
    const subscription = this.cartsService.updateCart(this.product.id,val)
    .subscribe({
      next:()=>{},
      error:(err)=>{
        console.log(err);
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }}
}

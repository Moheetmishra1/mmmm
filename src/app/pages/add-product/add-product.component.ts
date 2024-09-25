 import { Component, DestroyRef, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputAddProductComponent } from '../../input-add-product/input-add-product.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: '[app-add-product',
  standalone: true,
  imports: [FormsModule,InputAddProductComponent,NgIf],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  newProduct = {title:'',category:'',price:0, image:'',description:''}
 httpClient = inject(HttpClient);
 error=''
 successful=''
 private destroyRef= inject(DestroyRef)

  onFirst(s:HTMLInputElement){
     this.error=''
    this.successful=''
    this.newProduct= {...this.newProduct,[s.name]:s.value}
  }

  onDescription(desc:HTMLTextAreaElement){
    this.error=''
    this.successful=''
    this.newProduct={...this.newProduct,[desc.name]:desc.value}
  }

  onSubmit(formData:NgForm){
    setTimeout(()=>{
      this.error='';
      this.successful=''
    },2000)

    
    if(!(this.newProduct.category && this.newProduct.description && this.newProduct.image && this.newProduct.price && this.newProduct.title)){
        this.error='All field is required'
      return 
    }

    const subscription = this.httpClient.post('https://fakestoreapi.com/products',this.newProduct).subscribe({
      next:(value)=>{

        this.successful='Product is added succesfully.'
        formData.form.reset()
        let old = window.localStorage.getItem('newProduct')
        if(old){
          window.localStorage.setItem('newProdut',JSON.stringify([...JSON.parse(old),value]))
        }else{
          window.localStorage.setItem('newProduct',JSON.stringify([value]))
        }
      },
      error:(error)=>{
        this.error=error.error
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
   
  }
}

import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { EventEmitter } from 'stream';

@Component({
  selector: '[appInputAddProduct]',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './input-add-product.component.html',
  styleUrl: './input-add-product.component.css'
})
export class InputAddProductComponent {
@Input({required:true})  title !:{first:string,last:string,type1:string,type2:string};

@Output() first = new EventEmitter();

onClick(value:HTMLInputElement){


  this.first.emit(value)

}



}

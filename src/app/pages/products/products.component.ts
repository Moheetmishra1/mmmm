import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpecificCategoryComponent } from './specific-category/specific-category.component';
// import { SpecificCategoryComponent } from './specific-category/specific-category.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,SpecificCategoryComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  category= input.required<string>()

}

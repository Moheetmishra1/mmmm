import { Routes } from "@angular/router";
import { UpdateProductComponent } from "../../update-product/update-product.component";
import { SpecificCategoryComponent } from "./specific-category/specific-category.component";

export const routes :Routes=[
    {
            path:'',
            redirectTo:'specificCategory',
            pathMatch:'prefix'
    },
    {
        path:'specificCategory',
        component:SpecificCategoryComponent
    },
    {
        path:'updateproduct/:productid',
        component:UpdateProductComponent
    }
   
]
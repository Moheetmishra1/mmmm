import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { PnF } from './NoPageFound';
import { HomeComponent } from './pages/home/home.component';
import { ViewComponent } from './pages/view/view.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductsComponent } from './pages/products/products.component';

import { SpecificCategoryComponent } from './pages/products/specific-category/specific-category.component';
import { CartComponent } from './cart/cart.component';
import { CartsComponent } from './pages/carts/carts.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        
    },
    {
        path:'view/:productId',
        component:ViewComponent
    },{
        path:'addproduct',
        component:AddProductComponent
    },
    {
        path:'products/:category',
        component:ProductsComponent,
        children:[
            {
                path:'specificCategory',
                component:SpecificCategoryComponent
            }
           
        ]
    }
    ,
    {
        path:'signup',
        component:SignUpComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'carts',
        component:CartsComponent
    }
    ,
    {
        path:'**',
        component:PnF
    }
];

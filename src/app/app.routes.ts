import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { PnF } from './NoPageFound';
import { HomeComponent } from './pages/home/home.component';
import { ViewComponent } from './pages/view/view.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartsComponent } from './pages/carts/carts.component';
import { getUserDetails, UserComponent } from './pages/user/user.component';
import { routes  as productRoutes } from './pages/products/product.routes';
import { inject } from '@angular/core';
import { CartsService } from './pages/carts/carts.service';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';
import { UserUpdateComponent } from './pages/user/user-update/user-update.component';

const routeGaurd:CanMatchFn =(route,segmant)=>{
    const rou = inject(Router)
    const cartsService= inject(CartsService);
    if(cartsService.userName){
      return true;
    }
    return new RedirectCommand(rou.parseUrl('login'))
  }

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,

        title:"Main page",

    },
    {
        path:'view/:productId',
        component:ViewComponent
    },{
        path:'addproduct',
        component:AddProductComponent,
        canMatch:[routeGaurd]
    },
    {
        path:'products/:category',
        component:ProductsComponent,
        canMatch:[routeGaurd],

        children:productRoutes 
    },
    {
        path:'user/:username',
        component:UserComponent,
        // canMatch:[routeGaurd],
        // redirectTo:'details',
        // pathMatch
        // redirectTo:'details',
        // pathMatch:'prefix'
        // ,
        children:[
            {
                path:'details',
                component:UserDetailsComponent
            },
            {
                path:'update',
                component:UserUpdateComponent
            }
        ],
// 
        resolve:{
            message:getUserDetails  
        }
    },
    
    {
        path:'signup',
        component:SignUpComponent,

    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'carts',
        component:CartsComponent,
        canMatch:[routeGaurd],

    }
    ,
    {
        path:'**',
        component:PnF
    }
];

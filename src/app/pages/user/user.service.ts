import { inject, Injectable, signal } from "@angular/core";
import { USERTYPE } from "../../models/userType";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UserService{
user= signal<USERTYPE|undefined>(undefined)

private httpClient= inject(HttpClient)

getUser(username:string){

    return this.httpClient.get<USERTYPE[]>(`https://fakestoreapi.com/users`)
    .pipe(  map((data)=>data.find(a=>a.username=== username)) ,tap({
        next:((userData)=>{
            if(userData)
            this.user.set(userData)})
    }));
}


}
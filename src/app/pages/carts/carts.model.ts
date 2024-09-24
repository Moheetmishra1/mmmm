
export interface CARTS {
    id:number,
    category:string,
    description:string,
    image:string,
    price:number,
    title:string,
    rating:{
        rate:number,
        count:number
    },
    quantity:number
}

export interface USER    {
    id:number,
    email:'John@gmail.com',
    username:string,
    password:string,
    name:{
        firstname:string,
        lastname:string
    },
    address:{
        city:string,
        street:string,
        number:number,
        zipcode:string,
        geolocation:{
            lat:string,
            long:string
        }
    },
    phone:string
}
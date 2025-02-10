import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[]=[]
    constructor(){}

    get totalPrices():number{
        let totalPrice = 0;
        this.items.forEach(item=>
            totalPrice += item.price
            )
        return totalPrice
    }
}
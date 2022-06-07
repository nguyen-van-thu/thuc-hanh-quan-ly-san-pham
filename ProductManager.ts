import {Product} from "./Product";
export class ProductManager {
    public products : Product [] =  [];

    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product :Product) {
        this.products.push(product);
    }

}
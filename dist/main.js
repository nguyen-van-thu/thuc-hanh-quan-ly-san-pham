"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const ProductManager_1 = require("./ProductManager");
let laptop = new Product_1.Product("Laptop", 20000);
let iphone = new Product_1.Product("Iphone", 10000);
let productManager = new ProductManager_1.ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
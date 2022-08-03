import { Injectable } from '@angular/core';
import { product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: product[] = []
  constructor() { }


  addProductToCart(p: product) {
    this.products.push(p)
  }

  getProducts() {
    return this.products
  }

  clearProduct() {
    this.products = []
  }

}




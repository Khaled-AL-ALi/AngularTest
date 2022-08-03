import { Component, OnInit } from '@angular/core';
import { product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  product = this.cart.getProducts()
  sum: number = 0;
  newPrice: number = 0;
  shipping: number = 8;
  total: number = 0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.updateSum()

  }
  onKey(product: product, value: any) {
    this.newPrice = value * product.price;
    this.sum = this.sum - product.price + this.newPrice;
    this.total = this.sum + this.shipping;
  }

  updateSum() {
    this.sum = 0
    for (let i = 0; i < this.product.length; i++) {
      this.sum = this.sum + this.product[i].price
    }
    this.total = this.sum + this.shipping;

  }

  deleteProduct(product: any) {
    const index = this.product.indexOf(product);
    this.product.splice(index, 1)
    this.updateSum()
  }

}

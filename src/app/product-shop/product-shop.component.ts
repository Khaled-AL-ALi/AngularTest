import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  product: any;
  text: string = "add to cart";
  submitted: boolean = true;
  disableButton: boolean = false;
  constructor(private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const id = Number(routeParam.get("id"));
    this.product = products.find(p => p.id === id);
  }
  addToCart() {
    this.disableButton = true;
    this.text = "added to cart";
    this.submitted = false;
    this.cart.addProductToCart(this.product)
  }

}

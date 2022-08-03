import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { product } from 'src/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title: string = 'khaled al-ali academy';
  products: product[] = products;
  isunchnge = true;

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(product: product) {
    window.alert(product.name + ' course is available')
  }
  enableBuying() {
    this.isunchnge = !this.isunchnge
  }

}

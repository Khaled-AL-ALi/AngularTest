import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LibraryComponent } from './library/library.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductShopComponent },
  { path: 'product', component: ProductsComponent },
  { path: '', component: LandingpageComponent },
  { path: 'cart', component: CartItemComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'library', component: LibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

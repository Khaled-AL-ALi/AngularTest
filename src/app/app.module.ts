import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AlertDetailsComponent,
    ProductShopComponent,
    LandingpageComponent,
    CartItemComponent,
    CheckoutComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  msg: string = "@gmail.com";
  contactInfo = new Contact();
  submitted: boolean = true;
  ngOnInit(): void {
  }

  submit(form: any) {
    this.contactInfo.firstname = form.firstname;
    this.contactInfo.lastname = form.lastname;
    this.contactInfo.Email = form.Email;
    this.contactInfo.Password = form.Password;
    this.submitted = false;
    window.alert("cart is submitted by " + this.contactInfo.firstname + " with email " + this.contactInfo.Email)
  }

}

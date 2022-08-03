import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { product } from 'src/product';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {

  @Input() product!: product;
  @Input() isunchnge!: boolean;
  @Output() notify = new EventEmitter<product>()

  constructor() { }

  ngOnInit(): void {
  }


  clickMeChlid() {
    this.notify.emit(this.product)
  }


}

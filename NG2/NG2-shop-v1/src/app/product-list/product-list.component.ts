import { Component, OnInit,Input } from '@angular/core';

import { ProductComponent } from '../product/product.component';
import { Product } from '../model/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()  
  products: Array<Product>;

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.css']
})
export class ProductTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  product: Product;


  currentTab: number = 1;
  handleTabChange(event: any, tabIndx: number) {
    this.currentTab = tabIndx;
  }

  isTabSelected(tabIdx: number): boolean {
    return this.currentTab === tabIdx;
  }

}
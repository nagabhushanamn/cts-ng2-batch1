import { Component } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  name = 'NG2-shop';

  allProducts: any[];
  errorMessage: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.loadAllProducts()
      .then((products) => this.allProducts = products,
      (error) => { this.errorMessage = error }
      );

  }


}

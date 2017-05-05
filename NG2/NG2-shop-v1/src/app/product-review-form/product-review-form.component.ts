import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product-review-form',
  templateUrl: './product-review-form.component.html',
  styleUrls: ['./product-review-form.component.css']
})
export class ProductReviewFormComponent implements OnInit {

  review: any = { stars: '', author: '', comment: '' };

  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event: any) {
    event.preventDefault();
    // send this data to server with API-call
    this.product.reviews.push(this.review);
    this.review = { stars: '', author: '', comment: '' };
  }

} 
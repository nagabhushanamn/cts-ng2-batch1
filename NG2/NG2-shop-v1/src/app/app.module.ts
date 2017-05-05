import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';
import { ProductReviewFormComponent } from './product-review-form/product-review-form.component';
import { ProductService } from './product.service';


@NgModule({
  imports: [BrowserModule, FormsModule],
  providers:[ProductService],
  declarations: [ AppComponent ,ProductListComponent,ProductComponent,ProductTabsComponent,ProductReviewFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

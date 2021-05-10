import { Component, OnInit } from '@angular/core';

import { DataProduct } from './shared/models/data-product.model';
import { ProductService } from './shared/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  providers: [ProductService],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$: Observable<DataProduct[]>;

  constructor(private serviceProduct: ProductService) {
    this.products$ = this.serviceProduct.getPeople();
  }
}

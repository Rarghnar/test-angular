import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;

  constructor(private route: ActivatedRoute, private producService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      //this.product = this.producService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.producService.getProduct(id)
      .subscribe(product => {
        this.product = product; 
      });
  }

  createProduct() {
    const newProduct: Product = {
      id: '6',
      title: 'Stickers',
      image: "assets/images/stickers2.png",
      price: 80000,
      description:'bla bla bla bla bla'
    }
    this.producService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 55555,
      description:'edicion titulo '
    }
    this.producService.updateProduct('2',updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.producService.deleteProduct('222')
      .subscribe(rta => {
        console.log(rta);
      });
  }

}

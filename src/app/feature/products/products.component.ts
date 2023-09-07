import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../types/product.type";
import {ProductService} from "../../shared/services/product.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: ProductType[] = [];
  public isLoader: boolean = false;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.isLoader = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.isLoader = false;
        })
      )
      .subscribe(
        {
          next: data => {
            this.products = data;
          },
          error: err => {
            this.router.navigate(['/']);
          }
        }
      )
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";
import {Observable, Subscription, tap} from "rxjs";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  private subscriptionOrder: Subscription | null = null;
  public isError: boolean = false;
  public isNotError: boolean = false;
  public isDisabled: boolean = false;

  constructor(private cartService: CartService,
              private fb: FormBuilder,
              private productService: ProductService) {
  }

  public orderForm = this.fb.group({
    productName: [{value: this.cartService.productName, disabled: true}, Validators.required],
    comment: [''],
    name: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?[\\d]{11}$')]],
    country: ['', Validators.required],
    zip: ['', Validators.required],
    address: ['', [Validators.required, Validators.pattern('^[А-Яа-я0-9-+\\/\\s]+$')]],
  })

  createOrder() {
    this.isDisabled = true;
    this.subscriptionOrder = this.productService.createOrder({
      name: this.orderForm.value.name!,
      last_name: this.orderForm.value.lastName!,
      phone: this.orderForm.value.phone!,
      country: this.orderForm.value.country!,
      zip: this.orderForm.value.zip!,
      product: this.orderForm.controls.productName.value!,
      address: this.orderForm.value.address!,
      comment: this.orderForm.value.comment,
    })
      .pipe(
        tap(() => {
          this.isDisabled = false;
        })
      )
      .subscribe(response => {
        if (response.success && !response.message) {
          this.isNotError = true;
        } else {
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
          }, 3000);
        }
      })
  }
}

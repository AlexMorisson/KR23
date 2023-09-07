import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from "./products.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }

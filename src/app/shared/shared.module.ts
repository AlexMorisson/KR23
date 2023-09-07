import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./layout/footer/footer.component";
import {HeaderComponent} from "./layout/header/header.component";
import {ChangeDescriptionPipe} from "./pipes/change-description.pipe";
import {ProductComponent} from "./component/product/product.component";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ChangeDescriptionPipe,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ChangeDescriptionPipe,
    ProductComponent
  ]
})
export class SharedModule {
}

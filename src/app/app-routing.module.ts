import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./feature/main/main.component";
import {ProductsComponent} from "./feature/products/products.component";
import {ProductComponent} from "./shared/component/product/product.component";
import {OrderComponent} from "./feature/order/order.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductComponent
  },
  {
    path: 'order',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

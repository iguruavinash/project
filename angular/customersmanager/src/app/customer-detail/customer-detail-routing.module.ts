import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerOrderComponent } from './customer-order.component';
import { EditcustomerComponent } from './editcustomer.component';


const routes: Routes = [
  { path: '',
    component: CustomerComponent,
    children: [
      {path: 'detail', component: CustomerDetailComponent},
      {path: 'orders', component: CustomerOrderComponent},
      {path: 'edit', component: EditcustomerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDetailRoutingModule { }

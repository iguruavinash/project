import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent} from './templatedriven/templatedriven.component';
import { from } from 'rxjs';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveformComponent,
    CustomersComponent,
    CustomerDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

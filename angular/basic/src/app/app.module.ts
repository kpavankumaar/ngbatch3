import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersCardViewComponent } from './customers/cutomerscardview.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    CustomersComponent,
    CustomersCardViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

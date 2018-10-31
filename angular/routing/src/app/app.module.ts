import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { routes } from './routes';
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomersCardViewComponent } from './customers/customerscardview.component';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersCardViewComponent } from './customers/cutomerscardview.component';
import { HiddenappDirective } from './shared/hiddenapp.directive';
import { NavbarComponent } from './core/navigation/navbar/navbar.component';
import { SubnavComponent } from './core/navigation/subnav/subnav.component';
import { service } from './core/service/service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    CustomersComponent,
    CustomersCardViewComponent,
    HiddenappDirective,
    NavbarComponent,
    SubnavComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [service],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersCardViewComponent } from './customers/cutomerscardview.component';
import { HiddenappDirective } from './shared/hiddenapp.directive';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    CustomersComponent,
    CustomersCardViewComponent,
    HiddenappDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

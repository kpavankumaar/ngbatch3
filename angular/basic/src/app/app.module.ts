import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { HiddenappDirective } from './shared/hiddenapp.directive';
import { NavbarComponent } from './core/navigation/navbar/navbar.component';
import { service } from './core/service/service';
import { CustomersModule } from './customers/customersmodule';
import { CoreModule } from './core/coremodule';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HiddenappDirective,
   
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, CustomersModule,CoreModule
  ],
  providers: [service],
  bootstrap: [AppComponent]
})
export class AppModule { }

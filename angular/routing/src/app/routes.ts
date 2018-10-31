import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomersCardViewComponent } from './customers/customerscardview.component';

export const routes:Routes =[
    
    {path:'orders', component:OrdersComponent},
    {path:'', redirectTo:'customers', pathMatch:'full'},
    {path:'**', component:PagenotfoundComponent},
]
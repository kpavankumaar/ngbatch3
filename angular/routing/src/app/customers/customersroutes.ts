import { Routes } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersListViewComponent } from "./customerslistview.component";

export const customersRoute:Routes = [
    {
        path:'customers',
        component:CustomersComponent,
        children:[
            {path:'listview',component:CustomersListViewComponent},
            {path:'cardview',component:CustomersCardViewComponent},
            
        ]
    }
]
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CustomersComponent } from "./customers.component";
import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersListViewComponent } from "./customerslistview.component";
import { customersRoute } from "./customersroutes";


@NgModule({
    imports:[CommonModule,RouterModule.forChild(customersRoute)],
    declarations:[CustomersComponent,CustomersCardViewComponent,CustomersListViewComponent],
})
export class CustomersModule{

}
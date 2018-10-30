import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomersComponent } from "./customers.component";
import { CustomersCardViewComponent } from "./cutomerscardview.component";
import { SubnavComponent } from "../core/navigation/subnav/subnav.component";
import { CoreModule } from "../core/coremodule";


@NgModule({
    imports:[CommonModule,CoreModule],
    declarations:[CustomersComponent,CustomersCardViewComponent],
    exports:[CustomersComponent,CustomersCardViewComponent]
})
export class CustomersModule {

}
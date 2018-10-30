import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navigation/navbar/navbar.component";
import { SubnavComponent } from "./navigation/subnav/subnav.component";

@NgModule({
    imports:[CommonModule],
    declarations:[NavbarComponent,SubnavComponent],
    exports:[NavbarComponent,SubnavComponent]
})
export class CoreModule{

}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveComponent } from "./reactive.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports:[CommonModule,ReactiveFormsModule],
    declarations:[ReactiveComponent],
    exports:[ReactiveComponent]
})
export class ReactiveModule {

}

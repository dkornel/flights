import { NgModule } from "@angular/core";

import { MatTableModule } from "@angular/material/table";

import { FlightsComponent } from "./flights.component";

@NgModule({
    imports: [MatTableModule],
    exports: [FlightsComponent],
    declarations: [FlightsComponent]
})
export class FlightsModule {}

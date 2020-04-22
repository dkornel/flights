import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";

import { DataGridComponent } from "./data-grid.component";

@NgModule({
    imports: [CommonModule, MatTableModule],
    exports: [DataGridComponent],
    declarations: [DataGridComponent]
})
export class DataGridModule {}

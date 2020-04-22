import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { NavbarComponent } from "./navbar.component";

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule
    ],
    exports: [NavbarComponent],
    declarations: [NavbarComponent]
})
export class NavbarModule {}

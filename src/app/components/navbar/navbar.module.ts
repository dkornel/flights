import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { NavbarComponent } from "./navbar.component";

@NgModule({
    imports: [MatToolbarModule, MatButtonModule],
    exports: [NavbarComponent],
    declarations: [NavbarComponent]
})
export class NavbarModule {}

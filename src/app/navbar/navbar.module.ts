import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";

import { NavbarComponent } from "./navbar.component";

@NgModule({
    imports: [
        MatToolbarModule
    ],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
})
export class NavbarModule {}

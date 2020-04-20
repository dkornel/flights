import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";

import { AppValidationMessageComponent } from "./validation-message.component";

@NgModule({
    imports: [MatToolbarModule],
    exports: [AppValidationMessageComponent],
    declarations: [AppValidationMessageComponent],
})
export class AppValidationMessageModule {}

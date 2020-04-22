import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ViewerModule } from "./components/viewer/viewer.module";
import { DialogsModule } from "./components/dialogs/dialogs.module";
import { NavbarModule } from "./components/navbar/navbar.module";
import { DataGridModule } from "./components/data-grid/data-grid.module";
import { AppValidationMessageModule } from "./components/validation-message/validation-message.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DialogsModule,
        NavbarModule,
        AppValidationMessageModule,
        ViewerModule,
        DataGridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}

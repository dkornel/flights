import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { LoginDialogComponent } from "../dialogs/login-dialog/login-dialog.component";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
    constructor(private dialog: MatDialog) {}

    public openLoginDialog(): void {
        this.dialog.open(LoginDialogComponent);
    }
}

import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { LoginDialogComponent } from "../dialogs/login-dialog/login-dialog.component";

export interface MenuItem {
    name: string;
    objectType: string;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
    @Input() public menuItems: MenuItem[];

    @Input() public selectedMenu: MenuItem;
    @Output() public selectedMenuChange = new EventEmitter<MenuItem>();

    constructor(private dialog: MatDialog) {}

    public openLoginDialog(): void {
        this.dialog.open(LoginDialogComponent);
    }
}

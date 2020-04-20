import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login-dialog",
  templateUrl: "./login-dialog.component.html",
  styleUrls: ["./login-dialog.component.scss"]
})
export class LoginDialogComponent {
    public readonly loginForm = new FormGroup({
        user: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required])
    });

    constructor(
        public dialogRef: MatDialogRef<LoginDialogComponent>,
    ) {}

    public onConfirm(): void {
        this.dialogRef.close();
    }

    public hasError(validatorName: "required" | "email", formControlName: "user" | "password"): boolean {
        return this.loginForm.hasError(validatorName, formControlName);
    }
}

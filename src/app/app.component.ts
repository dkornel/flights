import { Component, ChangeDetectionStrategy } from "@angular/core";
import { AppValidationMessageService } from "./services/validation-message.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {

    public get validationMessage$() {
        return this.validationMessageService.validationMessage$;
    }

    constructor(
        private validationMessageService: AppValidationMessageService
    ) {}

    public clearValidationMessage(): void {
        this.validationMessageService.setValidationMessage("");
    }
}

import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Flight } from "./models/flight.model";
import { Airport } from "./models/airport.model";
import { MenuItem } from "./components/navbar/navbar.component";
import { AppValidationMessageService } from "./services/validation-message.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    public readonly menuItems: readonly MenuItem[] = [
        { name: "Flights", objectType: Flight.objectType },
        { name: "Airports", objectType: Airport.objectType }
    ];
    public selectedMenuItem = this.menuItems[0];

    public get validationMessage$() {
        return this.validationMessageService.validationMessage$;
    }

    constructor(private validationMessageService: AppValidationMessageService) {}

    public clearValidationMessage() {
        this.validationMessageService.setValidationMessage("");
    }
}

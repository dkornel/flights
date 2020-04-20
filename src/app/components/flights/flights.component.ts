import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

import { Flight, createMockFlights } from "./flight.model";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-flights",
    templateUrl: "./flights.component.html",
    styleUrls: ["./flights.component.scss"]
})
export class FlightsComponent {
    @Input() public flights: Flight[] = createMockFlights();

    public readonly headers = ["flightNumber", "origin", "destination"] as const;
}

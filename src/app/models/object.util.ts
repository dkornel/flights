import { map } from "rxjs/operators";

import { Flight } from "./flight.model";
import { Airport } from "./airport.model";
import { Header } from "./header.model";

export function fromJsonFactory(objectType: string, json: any) {
    switch (objectType) {
        case Flight.objectType:
            return new Flight(json);
        case Airport.objectType:
            return new Airport(json);
        default:
            return undefined;
    }
}

export function toClientObjects(objectType: string) {
    return map((json) => {
        return Array.isArray(json) ? json.map((item) => fromJsonFactory(objectType, item)) : null;
    });
}

export function mapToObjectHeader(objectType: string) {
    return map((json) => {
        return json && json[objectType] ? new Header(json[objectType]) : null;
    });
}

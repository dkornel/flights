import { map } from "rxjs/operators";

import { Flight } from "./flight.model";
import { Airport } from "./airport.model";

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
    return map((data) => {
        if (data && Array.isArray(data)) {
            return data.map(object => fromJsonFactory(objectType, object));
        }
    });
}

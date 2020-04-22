import { BaseObject, BaseObjectProperties } from "./base.model";

export interface FlightProperties extends BaseObjectProperties {
    flightNumber: string;
    origin: string;
    destination: string;
}

export class Flight extends BaseObject<FlightProperties> {
    public static readonly objectType = "flight";

    public get objectType(): string {
        return Flight.objectType;
    }

    constructor(json: FlightProperties) {
        super(json);
    }
}

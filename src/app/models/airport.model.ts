import { BaseObject, BaseObjectProperties } from "./base.model";

export interface AirportProperties extends BaseObjectProperties {
    name: string;
    country: string;
    iataCode: string;
    icaoCode: string;
}

export class Airport extends BaseObject<AirportProperties> {
    public static readonly objectType = "airport";

    public get objectType(): string {
        return Airport.objectType;
    }

    constructor(json: AirportProperties) {
        super(json);
    }
}

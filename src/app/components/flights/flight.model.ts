interface FlightProperties {
    readonly id: number;
    flightNumber: string;
    origin: string;
    destination: string;
}

export class Flight {
    private readonly properties: FlightProperties;

    public get id() {
        return this.properties.id;
    }

    public get flightNumber() {
        return this.properties.flightNumber;
    }

    public get origin() {
        return this.properties.origin;
    }

    public get destination() {
        return this.properties.destination;
    }

    constructor(json: FlightProperties) {
        this.properties = json;
    }
}

export const FLIGHT_EXAMPLES: readonly FlightProperties[] = [
    { id: 1, flightNumber: "A10", origin: "EPWR", destination: "EDDF" },
    { id: 2, flightNumber: "B20", origin: "EPWR", destination: "EDDF" },
    { id: 3, flightNumber: "C30", origin: "EPWR", destination: "EDDF" },
    { id: 4, flightNumber: "D40", origin: "EPWR", destination: "EDDF" },
    { id: 5, flightNumber: "E50", origin: "EPWR", destination: "EDDF" },
    { id: 6, flightNumber: "F60", origin: "EPWR", destination: "EDDF" },
    { id: 7, flightNumber: "G70", origin: "EPWR", destination: "EDDF" },
    { id: 8, flightNumber: "H80", origin: "EPWR", destination: "EDDF" }
];

export function createMockFlights() {
    return FLIGHT_EXAMPLES.map((json) => new Flight(json));
}

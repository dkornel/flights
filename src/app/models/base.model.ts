
export interface BaseObjectProperties {
    readonly id: number;
}

export abstract class BaseObject<T extends BaseObjectProperties> {
    public abstract objectType: string;

    private readonly properties: T;

    constructor(json: T) {
        this.properties = json;
    }

    public getValue<P extends keyof T>(propertyName: P): T[P] {
        return this.properties[propertyName];
    }
}

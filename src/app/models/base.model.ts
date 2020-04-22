export const idPropertyName = "id";

export type BaseObjectProperties = Readonly<Record<typeof idPropertyName, number>>;

export type ObjectType = string;

export abstract class BaseObject<T extends BaseObjectProperties> {
    public abstract objectType: ObjectType;

    private readonly properties: T;

    constructor(json: T) {
        this.properties = json;
    }

    public getValue<P extends keyof T>(propertyName: P): T[P] {
        return this.properties[propertyName];
    }
}

export function isIdProperty(propertyName: string) {
    return propertyName === idPropertyName;
}

export function not(predicate: (...args: any[]) => boolean) {
    return function notPredicate(...value: any[]) {
        return !predicate(...value);
    };
}

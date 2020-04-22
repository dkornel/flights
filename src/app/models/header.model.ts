import { BaseObject, BaseObjectProperties, not, isIdProperty } from "./base.model";

type HeaderDescription = string;
export interface HeaderDescriptions {
    [objectPropertyName: string]: HeaderDescription;
}

export type HeaderProperties = HeaderDescriptions & BaseObjectProperties;

export class Header extends BaseObject<HeaderProperties> {
    public static readonly objectType = "header";

    public get objectType(): string {
        return Header.objectType;
    }

    public readonly columns: string[];

    constructor(json: HeaderProperties) {
        super(json);
        this.columns = Object.keys(json).filter(not(isIdProperty));
    }

    public getDescription(columnId: keyof HeaderProperties) {
        return this.getValue(columnId);
    }
}

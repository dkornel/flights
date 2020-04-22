import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";

import { Header } from "../models/header.model";
import { toClientObjects, mapToObjectHeader } from "../models/object.util";
import { BaseObject, BaseObjectProperties, ObjectType } from "../models/base.model";

@Injectable({ providedIn: "root" })
export class DataLoadService {
    private cachedHeaders$: Observable<{ [objectType: string]: Header }>;
    private cachedClientObjects = new Map<ObjectType, Observable<BaseObject<BaseObjectProperties>[]>>();

    constructor(private http: HttpClient) {}

    public getObjects(objectType: string) {
        if (!this.cachedClientObjects.has(objectType)) {
            this.cachedClientObjects.set(
                objectType,
                this.getAll(objectType).pipe(toClientObjects(objectType), shareReplay(1))
            );
        }
        return this.cachedClientObjects.get(objectType);
    }

    public getHeader(objectType: string) {
        if (this.cachedHeaders$ === undefined) {
            this.cachedHeaders$ = this.getAll<{ [objectType: string]: Header }>(Header.objectType).pipe(shareReplay(1));
        }
        return this.cachedHeaders$.pipe(mapToObjectHeader(objectType));
    }

    private getAll<T>(objectType: string) {
        return this.http.get<T>(this.buildUrl(objectType));
    }

    private buildUrl(objectType: string): string {
        return `assets/mocks/${objectType}.json`;
    }
}

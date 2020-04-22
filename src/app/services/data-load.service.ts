import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { toClientObjects } from "../models/object.util";

const HEADERS_URL = "assets/mocks/headers.json" as const;

@Injectable({providedIn: "root"})
export class DataLoadService {

    constructor(private http: HttpClient) {}

    public getAllData(objectType: string) {
        return this.http.get(this.buildUrl(objectType)).pipe(
            toClientObjects(objectType)
        );
    }

    public getHeaders(objectType: string) {
        return this.http.get<{[objectType: string]: string[]}>(HEADERS_URL).pipe(
            map(headers => headers && headers[objectType])
        );
    }

    private buildUrl(objectType: string): string {
        return `assets/mocks/${objectType}.json`;
    }
}

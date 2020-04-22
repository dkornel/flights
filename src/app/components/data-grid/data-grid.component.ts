import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Observable, combineLatest } from "rxjs";
import { map } from "rxjs/operators";

import { Header } from "src/app/models/header.model";
import { DataLoadService } from "src/app/services/data-load.service";
import { ObjectType } from "src/app/models/base.model";

interface DataGridObject {
    getValue(propertyName: string): string | number;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-data-grid",
    templateUrl: "./data-grid.component.html",
    styleUrls: ["./data-grid.component.scss"]
})
export class DataGridComponent implements OnChanges {
    @Input() public objectType: ObjectType;

    public data$: Observable<{ header: Header; objects: DataGridObject[] }>;

    constructor(private loadService: DataLoadService) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if ("objectType" in changes) {
            this.data$ = combineLatest([
                this.loadService.getObjects(this.objectType),
                this.loadService.getHeader(this.objectType)
            ]).pipe(
                map(([objects, header]) => {
                    return {
                        objects,
                        header
                    };
                })
            );
        }
    }

    public getDataValue(data: DataGridObject, propertyName: string) {
        return data.getValue(propertyName);
    }
}

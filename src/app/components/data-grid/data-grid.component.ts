import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Observable, combineLatest } from "rxjs";

import { DataLoadService } from "src/app/services/data-load.service";
import { map } from "rxjs/operators";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-data-grid",
    templateUrl: "./data-grid.component.html",
    styleUrls: ["./data-grid.component.scss"]
})
export class DataGridComponent implements OnChanges {

    @Input() public objectType: string;

    public data$: Observable<{headers: string[], objects: any[]}>;

    constructor(private loadService: DataLoadService) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if ("objectType" in changes) {

            this.data$ = combineLatest(
                [
                    this.loadService.getAllData(this.objectType),
                    this.loadService.getHeaders(this.objectType)
                ]
            ).pipe(
                map(([objects, headers]) => {
                    return {
                        objects,
                        headers
                    };
                })
            );
        }
    }

    public getDataValue(data: any, propertyName: string) {
        return data.getValue(propertyName);
    }
}

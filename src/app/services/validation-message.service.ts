import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AppValidationMessageService {
    private readonly validationMessageSubject = new Subject<string>();
    public readonly validationMessage$ = this.validationMessageSubject.asObservable();

    public setValidationMessage(validationMessage: string): void {
        this.validationMessageSubject.next(validationMessage);
    }
}

import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-validation-message",
    templateUrl: "validation-message.component.html",
    styleUrls: ["validation-message.component.scss"]
})
export class AppValidationMessageComponent {
    @Input() public validationMessage: string;

    @Output() public discard = new EventEmitter<void>();
}

import { Component, DoCheck } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-date-picker-example',
    templateUrl: './platform-date-picker-example.component.html'
})
export class PlatformDatePickerExampleComponent implements DoCheck {
    public birthday: string = '';

    public datePickerForm = new FormGroup({
        example1: new FormControl({ value: '', disabled: false })
    });

    constructor() {}

    ngDoCheck(): void {
        console.log('datePickerForm: ', this.datePickerForm);
    }

    public save(): void {
        console.log('save datePickerForm: ');
    }
}

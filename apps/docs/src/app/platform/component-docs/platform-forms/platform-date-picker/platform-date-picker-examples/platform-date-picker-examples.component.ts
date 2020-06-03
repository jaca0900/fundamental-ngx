import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FdDate } from '@fundamental-ngx/core';

@Component({
    selector: 'fdp-platform-date-picker-example',
    templateUrl: './platform-date-picker-example.component.html'
})
export class PlatformDatePickerExampleComponent {
    public birthday: FdDate;

    public datePickerForm = new FormGroup({
    });

    public data = {
        birthday: this.birthday,
        examdate: {
            start: FdDate.getToday(),
            end: FdDate.getToday().nextDay()
        }
    };
    constructor() { }

    public save(value: any): void {
        alert('Form Value: ' + value);
    }
}

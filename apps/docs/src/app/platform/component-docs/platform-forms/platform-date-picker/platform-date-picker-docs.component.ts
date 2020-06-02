import { Component } from '@angular/core';
import * as datepickerHtml from '!raw-loader!./platform-date-picker-examples/platform-date-picker-example.component.html';
import * as datepickerts from '!raw-loader!./platform-date-picker-examples/platform-date-picker-examples.component.ts';

import { ExampleFile } from '../../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'app-date-picker',
    templateUrl: './platform-date-picker-docs.component.html'
})
export class PlatformDatePickerDocsComponent {
    datePickerExample: ExampleFile[] = [
        {
            language: 'html',
            code: datepickerHtml,
            fileName: 'platform-date-picker-example'
        },
        {
            language: 'typescript',
            code: datepickerts,
            fileName: 'platform-date-picker-example',
            component: 'PlatformDatePickerExampleComponent'
        }
    ];

    constructor() {}
}

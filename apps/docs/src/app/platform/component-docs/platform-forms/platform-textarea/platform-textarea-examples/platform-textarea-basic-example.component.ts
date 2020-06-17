import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'fdp-platform-textarea-basic-example',
    templateUrl: './platform-textarea-basic-example.component.html',
    styleUrls: ['./platform-textarea-basic-example.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PlatformTextareaBasicExampleComponent implements OnInit {
    form: FormGroup;
    data: ReadonlyDescriptionObject;
    tVal = 'sdafsdf';

    constructor() {
        this.form = new FormGroup({
            ff3: new FormControl({ value: 'This is disabled', disabled: true })
        });

        this.data = new ReadonlyDescriptionObject(
            'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                'This is a readonly description where you can scroll down to read but cannot edit anything.'
        );
    }
    ngOnInit() {}
}
class ReadonlyDescriptionObject {
    constructor(public readonlyDescription: string) {}
}

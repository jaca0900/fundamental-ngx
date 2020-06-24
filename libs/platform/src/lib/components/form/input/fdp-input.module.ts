import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { FdpFormGroupModule } from '@fundamental-ngx/platform';
import { CommonModule } from '@angular/common';
import { FormModule as FdFormModule } from '@fundamental-ngx/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        InputComponent
    ],
    imports: [
        CommonModule,
        FdpFormGroupModule,
        FormsModule,
        FdFormModule
    ],
    exports: [
        InputComponent
    ]
})
export class PlatformInputModule {}

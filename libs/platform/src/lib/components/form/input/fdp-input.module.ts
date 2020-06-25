import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';
import { FormModule as FdFormModule } from '@fundamental-ngx/core';
import { FormsModule as coreFormModule} from '@angular/forms';
import { FdpFormGroupModule } from '../form-group/fdp-form.module';

@NgModule({
    declarations: [
        InputComponent
    ],
    imports: [
        CommonModule,
        FdpFormGroupModule,
        coreFormModule,
        FdFormModule
    ],
    exports: [
        InputComponent
    ]
})
export class PlatformInputModule {}

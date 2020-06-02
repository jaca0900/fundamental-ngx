import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../../api-files';
import { SharedDocumentationModule } from '../../../../documentation/shared-documentation.module';
import { PlatformDatePickerDocsComponent } from './platform-date-picker-docs.component';
import { PlatformDatePickerHeaderComponent } from './platform-date-picker-header/platform-date-picker-header.component';
import { PlatformDatePickerExampleComponent } from './platform-date-picker-examples/platform-date-picker-examples.component';
import { PlatformButtonModule, PlatformDatePickerModule, FdpFormGroupModule } from '@fundamental-ngx/platform';

const routes: Routes = [
    {
        path: '',
        component: PlatformDatePickerHeaderComponent,
        children: [
            { path: '', component: PlatformDatePickerDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.datePicker } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationModule,
        PlatformDatePickerModule,
        FdpFormGroupModule,
        PlatformButtonModule
    ],
    exports: [RouterModule],
    declarations: [
        PlatformDatePickerDocsComponent,
        PlatformDatePickerExampleComponent,
        PlatformDatePickerHeaderComponent
    ]
})
export class PlatformDatePickerDocsModule {}

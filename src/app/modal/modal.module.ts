import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalService} from './modal.service';
import {ModalComponent} from './modal/modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [
        ModalComponent
    ],
    exports: [],
    providers: [
        ModalService
    ],
    entryComponents: [ModalComponent]
})
export class ModalModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModalModule,
            providers: [ModalService]
        };
    }
}

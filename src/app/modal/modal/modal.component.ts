import {Component, EventEmitter, HostBinding, HostListener, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {windowAppearance, wrapperAppearance} from '../appearence.animation';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    animations: [windowAppearance, wrapperAppearance]
})
export class ModalComponent implements OnInit {

    public width = 'auto';
    public height = 'auto';

    @ViewChild('template', {read: ViewContainerRef}) template: ViewContainerRef;

    @HostBinding('@wrapperAppearance')
    wrapperAppearance = true;

    @HostListener('wheel', ['$event'])
    wheel(event) {
        event.preventDefault();
    }

    constructor() {
    }

    ngOnInit() {
    }

}

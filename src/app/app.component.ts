import { Component, EventEmitter, ViewContainerRef } from '@angular/core';
import { SlidesService } from 'app/slides.service';
import { ModalService } from 'app/modal/modal.service';
import { IModalComponent } from './modal/IModalComponent';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    slideNumber = 1;

    constructor(private slidesService: SlidesService,
        public appRef: ViewContainerRef,
        private modalService: ModalService) {
        this.slidesService.getSlideNumber().subscribe(num => {
            this.slideNumber = num;
        });
    }

    get slidesCount(): number {
        return this.slidesService ?
            this.slidesService.getSlidesCount() :
            0;
    }

    nextSlide() {
        this.slidesService.nextSlide();
    }

    num() {
        const instance = this.modalService.open<TmpComponent>(
            TmpComponent,
            { text: 'SOME TEXT!' },
            { width: '500px', height: '300px' });
    }

    prevSlide() {
        this.slidesService.prevSlide();
    }
}

@Component({
    selector: 'app-name',
    template: '<h2>TITLE!</h2><p>{{text}}</p><button (click)="close.emit({lala: 3})">Close me!</button>'
})

export class TmpComponent implements IModalComponent {
    public text = '';
    private hiddedText = 'hiddedText';
    public close = new EventEmitter<any>();

    public getHiddedText() {
        return this.text = this.hiddedText;
    }

    constructor() {
    }
}

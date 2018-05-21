import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlidesService } from 'app/slides.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {

  public style = '';

  width = parseFloat(document.body.style.width) / 2;

  @ViewChild('separator') separator: ElementRef;

  @HostBinding('style.grid-template-columns') columns;

  constructor(route: ActivatedRoute, slidesService: SlidesService) {
    route.params.subscribe(params => {
      this.style = slidesService.getSlide()['style'];
    });
  }

  mouseDown() {
    document.body.onmousemove = event => {
      this.columns = `${event.clientX}px 1fr`;
    };
    document.body.ondragstart = () => false;
    document.body.onmouseup = () => {
      document.body.onmousemove = null;
    };
  }

  dragStart() {
    return false;
  }
}

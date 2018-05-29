import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class SlidesService {

  private slideNumber = 0;

  private slideNumber$: ReplaySubject<number> = new ReplaySubject<number>(1);

  private slides: any = [
    // {
    //   route: ['slides', 1],
    //   html: require('./generator/1/grid.html'),
    //   defaultStyles: require('./generator/1/default.css'),
    //   editor: {
    //     type: 'css',
    //     text:  require('./generator/1/grid.css')
    //   }
    // },
    {
      route: ['slides', 1],
      editor: {
        type: 'javascript',
        text: require('text-loader!./generator/2/script.js')
      }
    }
  ];

  public getSlide() {
    return this.slides[this.slideNumber];
  }

  public getSlideNumber(): Observable<number> {
    return this.slideNumber$.map(num => num + 1);
  }

  nextSlide() {
    if (this.slideNumber + 1 > this.slides.length - 1) {
      return;
    }
    this.slideNumber++;
    this.router.navigate(this.slides[this.slideNumber].route).then(() => this.slideNumber$.next(this.slideNumber));
  }

  prevSlide() {
    if (this.slideNumber - 1 < 0) {
      return;
    }
    this.slideNumber--;
    this.router.navigate(this.slides[this.slideNumber].route).then(() => this.slideNumber$.next(this.slideNumber));
  }

  constructor(private router: Router, route: ActivatedRoute) {
    /* this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        console.log(event.url);
        console.log(this.slides.find(slide => '/' + slide.route.join('/')  === event.url).route);
        this.slideNumber = this.slides.indexOf(this.slides.find(slide => '/' + slide.route.join('/') === event.url));
        this.slideNumber$.next(this.slideNumber);
      }); */
  }
}

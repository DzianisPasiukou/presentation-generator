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
    {
      route: ['introduction'],
    },
    {
      route: ['support'],
    },
    {
      route: ['theory', 'line'],
    },
    {
      route: ['theory', 'cell'],
    },
    {
      route: ['theory', 'track'],
    },
    {
      route: ['theory', 'area'],
    },
    {
      route: ['slides', 1],
      style: `.grid {
  display: grid;
}`
    },
    {
      route: ['slides', 2],
      style: `.grid {
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-template-rows: 250px 250px 250px;
}`
    },
    {
      route: ['slides', 3],
      style: `.grid {
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-template-rows: 250px 250px 250px;
  grid-gap: 20px;
}`
    },
    {
      route: ['slides', 4],
      style: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px 250px;
  grid-gap: 20px;
}`
    },
    {
      route: ['slides', 5],
      style: `.grid {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
  grid-template-rows: 250px 250px 250px;
  grid-gap: 20px;
}`
    },
    {
      route: ['slides', 6],
      style: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 250px 250px 250px;
  grid-gap: 20px;
}`
    },
    {
      route: ['slides', 7],
      style: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  grid-gap: 20px;
}`
    },
    {
      route: ['slides', 8],
      style: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 20px;
}`
    },
    {
      route: ['slides', 9],
      style: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  grid-gap: 20px;
}`
    },
    {
      route: ['slides', 10],
      style: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.grid-item:nth-child(1) {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}`
    },
    {
      route: ['slides', 11],
      style: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.grid-item:nth-child(1) {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}`
    },
    {
      route: ['slides', 12],
      style: `.grid {
  display: grid;
  margin: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.grid-item:nth-child(1) {
  grid-area: 1 / 2 / 3 / 4;
}`
    },
    {
      route: ['slides', 13],
      style: `.grid {
  display: grid;
  margin: 10px;
  grid-gap: 10px;
  grid-template-columns: [side-start] 1fr
                         [main-start] 1fr 1fr
                         [main-end];
  grid-template-rows: [main-start] 250px 250px
                      [main-end];
}

.grid-item:nth-child(1) {
  grid-column: main-start / main-end;
  grid-row: main-start / main-end;
}`
    },
    {
      route: ['slides', 13],
      style: `.grid {
  display: grid;
  margin: 10px;
  grid-gap: 10px;
  grid-template-columns: [side-start] 1fr
                         [main-start] 1fr 1fr
                         [main-end];
  grid-template-rows: [main-start] 250px 250px
                      [main-end];
}

.grid-item:nth-child(1) {
  grid-area: main;
}`
    },
    {
      route: ['slides', 14],
      style: `.grid {
  display: grid;
  margin: 10px;
  grid-gap: 10px;
  grid-template-areas: "side1 main main"
                       "side2 main main";
}

.grid-item:nth-child(1) {
  grid-area: main;
}

.grid-item:nth-child(2) {
  grid-area: side2;
}

.grid-item:nth-child(3) {
  grid-area: side1;
}`
    },
    {
      route: ['slides', 15],
      style: `.grid {
  display: grid;
  margin: 10px;
  grid-gap: 10px;
  grid-template-columns: 200px 1fr 1fr 100px;
  grid-template-areas: "header header header header"
                       "side1  main   main   add1"
                       "side2  main   main   add2"
                       "side2  main   main   add3"
                       ".      footer footer footer";
}

.grid-item:nth-child(1) {
  grid-area: main;
}

.grid-item:nth-child(2) {
  grid-area: side2;
}

.grid-item:nth-child(3) {
  grid-area: side1;
}

.grid-item:nth-child(4) {
  grid-area: header;
}

.grid-item:nth-child(5) {
  grid-area: footer;
}

.grid-item:nth-child(6) {
  grid-area: add1;
}

.grid-item:nth-child(7) {
  grid-area: add2;
}

.grid-item:nth-child(8) {
  grid-area: add3;
}`
    },
    {
      route: ['slides', 16],
      style: `.grid {
  display: grid;
  margin: 10px;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.grid-item:nth-child(2) {
  grid-column-end: span 2;
}

.grid-item:nth-child(3) {
  grid-column-end: span 2;
}

.grid-item:nth-child(7) {
  grid-column-end: span 2;
}`
    },
    {
      route: ['slides', 17],
      style: `.grid {
  display: grid;
  margin: 10px;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: dense;
}

.grid-item:nth-child(2) {
  grid-column-end: span 2;
}

.grid-item:nth-child(3) {
  grid-column-end: span 2;
}

.grid-item:nth-child(7) {
  grid-column-end: span 2;
}`
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss']
})
export class TheoryComponent implements OnInit {

  public src;

  constructor(route: ActivatedRoute, slidesService: SlidesService) {
    route.params.subscribe(params => {
      this.src = '../../assets/' + params['img'] + '.png';
    });
  }

  ngOnInit() {
  }

}

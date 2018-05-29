import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slide-view',
  templateUrl: './slide-view.component.html',
  styleUrls: ['./slide-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideViewComponent implements OnInit, AfterViewInit {

  @Input('htmlContent')
  public htmlContent: string;

  private _style = '';
  private styleElem;

  @Input('styles')
  public set style(style) {
    this._style = style;
    if (this.styleElem) {
      this.styleElem.innerText = this._style;
    }
  }

  public get style() {
    return this._style;
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.styleElem = document.createElement('style');
    this.styleElem.innerText = this.style;
    document.body.appendChild(this.styleElem);
  }

}

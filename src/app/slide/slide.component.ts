import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlidesService } from 'app/slides.service';

import 'brace';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {

  public style = '';
  public defaultStyles = '';
  public html = '';
  public editor;

  public consoleLogsText = '';

  width = parseFloat(document.body.style.width) / 2;

  @ViewChild('separator') separator: ElementRef;
  @ViewChild('editorElement') editorElement: any;

  @HostBinding('style.grid-template-columns') columns;

  constructor(route: ActivatedRoute, slidesService: SlidesService) {
    route.params.subscribe(params => {
      this.html = slidesService.getSlide()['html'];
      this.editor = slidesService.getSlide()['editor'];
      this.defaultStyles = slidesService.getSlide()['defaultStyles'];

      if (this.editor.type === 'css') {
        this.style = this.editor.text;
      }

      let styleElem = document.createElement('style');
      styleElem.innerText = this.defaultStyles;
      document.body.appendChild(styleElem);

    });
  }

  ngOnInit() {
    // disable Automatically scrolling cursor into view after selection change warning
    this.editorElement.getEditor().$blockScrolling = Infinity;
  }

  ngAfterViewInit() {
    this.editorElement.getEditor().setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: false
    });
  }

  mouseDown() {
    document.body.onmousemove = event => {
      console.log(event.clientX);

      this.columns = `${event.clientX}px auto`;
    };
    document.body.ondragstart = () => false;
    document.body.onmouseup = () => {
      document.body.onmousemove = null;
    };
  }

  dragStart() {
    return false;
  }

  onTextChanged($event): void {
    this.editor.text = $event;

    if (this.editor.type === 'css') {
      this.style = $event;
    }

    if (this.editor.type === 'javascript') {
      // console.log($event);
    }
  }

  onRun(): void {
    // let slideViewContainerFrame = document.getElementById('slideViewContainerFrame');
    // (slideViewContainerFrame as any).window.eval(this.editorElement.oldText);

    window.frames[0].window.eval(this.editorElement.text);

    let consoleLogMathes = /console\.log\([^)]+\);/g;

    let consoleLogs = consoleLogMathes.exec(this.editorElement.text);
    this.consoleLogsText = consoleLogs.join('\n');

    // eval(this.editorElement.oldText);
  }

  onClean(): void {
    window.frames[0].window.eval("document.body.innerHTML = '';");
  }
}

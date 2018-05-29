import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { AceEditorModule } from 'ng2-ace-editor';

import { SlideViewComponent } from './slide/slide-view/slide-view.component';
import { SlidesService } from 'app/slides.service';
import { SupportComponent } from './support/support.component';
import { TheoryComponent } from './theory/theory.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { EndComponent } from './end/end.component';
import { ModalModule } from 'app/modal/modal.module';
import { TmpComponent } from 'app/app.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    TheoryComponent,
    SlideViewComponent,
    SupportComponent,
    IntroductionComponent,
    EndComponent,
    TmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceEditorModule,
    ModalModule.forRoot()
  ],
  providers: [SlidesService],
  bootstrap: [AppComponent],
  entryComponents: [TmpComponent]
})
export class AppModule { }

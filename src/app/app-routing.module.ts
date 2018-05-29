import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from 'app/slide/slide.component';
import { SupportComponent } from 'app/support/support.component';
import { IntroductionComponent } from 'app/introduction/introduction.component';
import { EndComponent } from 'app/end/end.component';
import { TheoryComponent } from './theory/theory.component';

const routes: Routes = [
  { path: '', redirectTo: '/slides/1', pathMatch: 'full'},
  { path: 'slides/:number', component: SlideComponent },
  { path: 'theory/:img', component: TheoryComponent },
  { path: 'support', component: SupportComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'end', component: EndComponent },
  { path: '**', redirectTo: '/introduction', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

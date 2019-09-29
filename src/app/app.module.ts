import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeResultsComponent } from './home-results/home-results.component';
import { CodeEvaluationComponent } from './code-evaluation/code-evaluation.component';
import { QuestionFetchService } from './code-evaluation/question-fetch.service';
import {HttpClientModule} from '@angular/common/http';
import { MetricsPageComponent } from './metrics-page/metrics-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeResultsComponent,
    CodeEvaluationComponent,
    MetricsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QuestionFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

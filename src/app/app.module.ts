import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { LexicalAnalyzerComponent } from './analyzer/lexical-analyzer/lexical-analyzer.component'
import { AnalyzerComponent } from './analyzer/analyzer.component'

@NgModule({
  declarations: [
    AppComponent,
    LexicalAnalyzerComponent,
    AnalyzerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

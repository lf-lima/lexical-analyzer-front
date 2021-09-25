import { SharedModule } from './../shared/shared.module'
import { AnalyzerComponent } from './analyzer.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AnalyzerRoutingModule } from './analyzer-routing.module'
import { LoadFileComponent } from './load-file/load-file.component'
import { FileAnalysisComponent } from './file-analysis/file-analysis.component'

@NgModule({
  declarations: [
    AnalyzerComponent,
    LoadFileComponent,
    FileAnalysisComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnalyzerRoutingModule
  ]
})
export class AnalyzerModule { }

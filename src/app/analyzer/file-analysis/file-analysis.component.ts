import { FileAnalysis } from './../../shared/models/fileAnalysis'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-file-analysis',
  templateUrl: './file-analysis.component.html',
  styleUrls: ['./file-analysis.component.scss']
})
export class FileAnalysisComponent implements OnInit {

  constructor() { }

  @Input()
  fileAnalysis: FileAnalysis[] = []

  lineNumber: number

  ngOnInit(): void {
  }
}

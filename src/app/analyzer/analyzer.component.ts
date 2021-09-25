import { Component, OnInit } from '@angular/core'
import { FileAnalysis } from '../shared/models/fileAnalysis'

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.scss']
})
export class AnalyzerComponent implements OnInit {

  fileAnalysis: FileAnalysis[]

  constructor() { }

  ngOnInit(): void {
  }

  receivedFile(fileAnalysis: FileAnalysis[]): void {

    this.fileAnalysis = fileAnalysis
  }
}

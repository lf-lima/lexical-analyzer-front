import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { analyseFile } from 'src/app/shared/helpers/analyseFile'
import { FileAnalysis } from 'src/app/shared/models/fileAnalysis'

@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.scss']
})
export class LoadFileComponent implements OnInit {

  @Output()
  whenReceivedFile: EventEmitter<FileAnalysis[]> = new EventEmitter<FileAnalysis[]>()

  file: File

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(files: File[]): void {
    if (files[0]) {
      this.file = files[0]
    }
  }

  async receiveFile(): Promise<void> {
    if (this.file) {
      const fileText = await this.file.text()

      const fileAnalysis = analyseFile(fileText)

      this.whenReceivedFile.emit(fileAnalysis)
    }
  }
}

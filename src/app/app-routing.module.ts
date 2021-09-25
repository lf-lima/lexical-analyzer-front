import { AnalyzerComponent } from './analyzer/analyzer.component'
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'analyzer'
  },
  {
    path: 'analyzer',
    loadChildren: './analyzer/analyzer.module#AnalyzerModule'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

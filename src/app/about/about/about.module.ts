import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './../about.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: AboutComponent }
]

@NgModule({
  imports: [
  CommonModule,
    RouterModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    AboutComponent
  ],
  exports: []
})
export class AboutModule { }

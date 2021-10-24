import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BrowseComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BrowseComponent
  ]
})
export class BrowseModule { }

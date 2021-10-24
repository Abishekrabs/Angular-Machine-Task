import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { BrowseModule } from '../browse/browse.module';
import { GridModule } from '../grid/grid.module';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    BrowseModule,
    GridModule
  ]
})
export class ViewModule { }

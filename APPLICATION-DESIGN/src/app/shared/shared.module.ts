import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialDesignModule } from './external/material-design.module';
import { AwesomePipe } from './pipes/awesome.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  // add other external component's library imports
  imports: [MaterialDesignModule],
  // add every shared components declaration and/or barrels for pipes and directives
  declarations: [AwesomePipe, HighlightDirective],
  // anything that can be accessed
  exports: [AwesomePipe, HighlightDirective, MaterialDesignModule, CommonModule, FormsModule],
})
export class SharedModule { }

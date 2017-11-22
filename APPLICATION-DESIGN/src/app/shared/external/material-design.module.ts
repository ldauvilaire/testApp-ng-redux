
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatSidenavModule, MatListModule, MatIconModule, MatLineModule} from '@angular/material';

const materials = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatLineModule
];

@NgModule({
  imports: materials,
  exports: materials,
})
export class MaterialDesignModule { }

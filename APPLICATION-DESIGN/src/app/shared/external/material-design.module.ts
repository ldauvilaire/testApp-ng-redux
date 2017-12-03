
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatSidenavModule, MatListModule, MatIconModule, MatLineModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

const materials = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatLineModule,
  MatCardModule,
  MatFormFieldModule
];

@NgModule({
  imports: materials,
  exports: materials,
})
export class MaterialDesignModule { }

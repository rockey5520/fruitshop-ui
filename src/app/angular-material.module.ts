import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }

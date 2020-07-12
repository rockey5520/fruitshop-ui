import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }

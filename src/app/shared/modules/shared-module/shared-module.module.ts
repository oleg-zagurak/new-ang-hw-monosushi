import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';


const MATERIAL = [
  MatDialogModule,
  BrowserAnimationsModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL,
    SwiperModule
  ],
  exports: [
    ...MATERIAL,
    SwiperModule
  ]
})
export class SharedModule { }

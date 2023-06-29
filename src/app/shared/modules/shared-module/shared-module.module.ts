import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { SwiperModule } from 'swiper/angular';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { MapComponent } from 'src/app/components/map/map.component';




const MATERIAL = [
  MatDialogModule,
  MatIconModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    ...MATERIAL,
    SwiperModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ...MATERIAL,
    SwiperModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MapComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'uk' },
  ]
})
export class SharedModule { }

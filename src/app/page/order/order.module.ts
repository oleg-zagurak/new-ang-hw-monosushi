import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/modules/shared-module/shared-module.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';



@NgModule({
  declarations: [
    OrderComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }

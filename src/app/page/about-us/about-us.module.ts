import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/modules/shared-module/shared-module.module';
import {AboutUsRoutingModule} from './about-us-routing.module';
import {AboutUsComponent} from './about-us.component';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }

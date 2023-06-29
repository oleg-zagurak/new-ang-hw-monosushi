import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ActionsComponent} from './actions.component';

import {SharedModule} from '../../shared/modules/shared-module/shared-module.module';
import {ActionsRoutingModule} from './actions-routing.module';



@NgModule({
  declarations: [
    ActionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ActionsRoutingModule
  ]
})
export class ActionsModule { }

import { NgModule } from '@angular/core';

import { CuisinesComponent } from './cuisines.component';
import { CommonModule } from '@angular/common';
import { CuisinesRoutingModule } from './cuisines-routing.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    CuisinesComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CuisinesRoutingModule
  ],
  providers: [],
  exports: [
    CuisinesComponent
  ]
})
export class CuisinesModule { }

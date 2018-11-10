import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesComponent } from './dishes.component';
import { DishesRoutingModule } from './dishes-routing.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    DishesComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DishesRoutingModule
  ],
  exports: [
    DishesComponent
  ]
})
export class DishesModule { }

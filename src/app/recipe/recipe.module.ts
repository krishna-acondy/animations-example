import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    RecipeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RecipeRoutingModule
  ],
  exports: [
    RecipeComponent
  ]
})
export class RecipeModule { }

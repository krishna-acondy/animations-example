import { NgModule } from '@angular/core';

import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
      CardComponent
  ]
})
export class CardModule { }

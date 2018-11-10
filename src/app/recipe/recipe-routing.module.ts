import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    pathMatch: 'full',
    data: { depth: 3 }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecipeRoutingModule { }

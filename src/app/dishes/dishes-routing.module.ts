import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishesComponent } from './dishes.component';

const routes: Routes = [
  {
    path: '',
    component: DishesComponent,
    pathMatch: 'full',
    data: { depth: 2 }
  },
  {
    path: ':name/recipe',
    loadChildren: '../recipe/recipe.module#RecipeModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cuisines',
    pathMatch: 'full'
  },
  {
    path: 'cuisines',
    loadChildren: './cuisines/cuisines.module#CuisinesModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

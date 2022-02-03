import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'got', loadChildren: () => import('./game-of-thrones/game-of-thrones.module').then(m => m.GameOfThronesModule) },
  { path: 'hp', loadChildren: () => import('./harry-potter/harry-potter.module').then(m => m.HarryPotterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

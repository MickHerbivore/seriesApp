import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameOfThronesRoutingModule } from './game-of-thrones-routing.module';
import { GameOfThronesComponent } from './game-of-thrones.component';


@NgModule({
  declarations: [
    GameOfThronesComponent
  ],
  imports: [
    CommonModule,
    GameOfThronesRoutingModule
  ]
})
export class GameOfThronesModule { }

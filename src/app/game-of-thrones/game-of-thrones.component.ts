import { Component, OnInit } from '@angular/core';
import { GameOfThronesService } from '../services/game-of-thrones.service';

@Component({
  selector: 'app-game-of-thrones',
  templateUrl: './game-of-thrones.component.html',
  styleUrls: ['./game-of-thrones.component.css']
})
export class GameOfThronesComponent implements OnInit {

  characters: any;

  constructor( private gameOfThronesService: GameOfThronesService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.gameOfThronesService.getCharacters().subscribe((data) => {
      this.characters = data;
    })
  }

}

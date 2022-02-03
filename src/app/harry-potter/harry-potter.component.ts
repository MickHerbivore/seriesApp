import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../services/harry-potter.service';

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.css']
})
export class HarryPotterComponent implements OnInit {

  characters: any;

  constructor( private harryPotterService: HarryPotterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.harryPotterService.getCharacters().subscribe((data) => {
      this.characters = data;
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  
  urlHarryPotter = 'http://hp-api.herokuapp.com/api/characters/house/';
  house = 'ravenclaw';

  constructor( private http: HttpClient ) { }

  getCharacters(): Observable<any> {
    return this.http.get(`${ this.urlHarryPotter }${ this.house }`);
  }
}

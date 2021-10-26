import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  // Veikeju masyvas, kurio duomenis uzpildysime is CharacterService
  public characters : any = [];

  // "Injectiname" character service i komponenta
  constructor(private _characterService : CharacterService) {

  }

  ngOnInit(): void {
    // Characters kintamajam, priskiriame duomenis is characterService getCharaters funkcijos
    this.characters = this._characterService.getCharacters();

    console.log(this.characters);

  }

}

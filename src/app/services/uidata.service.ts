import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIDataService {

  // Private kintamasis
  private charactersPage = 4;

  constructor() {

  }

  // Getter
  getCharactersPage() {
    return this.charactersPage;
  }

  // Setter
  setCharactersPage(page : number) {
    this.charactersPage = page;
  }
}

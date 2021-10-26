import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Angular Dekoratorius */
@Injectable({
  providedIn: 'root'
})

/* Service tipo klases atsakingos uz darba su duomenimis */
export class CharacterService {

  //Konstruktorius

  // Injectiname angular HttpClient
  constructor(private http: HttpClient) {
    // kolkas konstruktoriuje nedarom nieko
  }

  // Klases metodai/funkcijos

  // Susikureme nauja funkcija, gauti veikeju duomenims
  getCharacters() {
      // Lokalus kintamasis, pasiekiamas tik sios funkcijos viduje

      // url kintamasis, nurodo i koki API endpoint'a krepsimes

      // Dokumentacija kokie duomenys grazinami:
      // https://rickandmortyapi.com/documentation/#character-schema
      let url = 'https://rickandmortyapi.com/api/character';

      // Pasinaudodami angular HttpClient issiunciame get uzklausa i nurodyta url
      let data = this.http.get(url);

      return data;
  }


}

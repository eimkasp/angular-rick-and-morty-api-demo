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

  /*
    Parametrai:
    page - Klaustukas gale nurodo, kad sitas parametras nera privalomas
    : number - nurodo tipa, kad tai turi buti skaicius
  */
  getCharacters(page? : number) {
      console.log("Page parametras");
      console.log(page);
      // Lokalus kintamasis, pasiekiamas tik sios funkcijos viduje

      // url kintamasis, nurodo i koki API endpoint'a krepsimes

      // Dokumentacija kokie duomenys grazinami:
      // https://rickandmortyapi.com/documentation/#character-schema
      let url : string = '';

      // Patikriname ar perduotas page parametras ir perduodame ji i uzklausos URL
      if(page) {
        // Neteisingas budas perduoti parametrus
        url = 'https://rickandmortyapi.com/api/character?page=' + page;
      } else {
        url = 'https://rickandmortyapi.com/api/character';
      }


      console.log("API Uzklausa:");
      console.log(url);

      // Pasinaudodami angular HttpClient issiunciame get uzklausa i nurodyta url
      let data = this.http.get(url);

      return data;
  }
}

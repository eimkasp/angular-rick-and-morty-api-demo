/* HTTP Kliento panaudojimo pavyzdziai: https://blog.angular-university.io/angular-http/  */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Angular Dekoratorius */
@Injectable({
  providedIn: 'root'
})

/* Service tipo klases atsakingos uz darba su duomenimis */
export class CharacterService {
  // Objekto klases kintamasis, pasiekiamas visoje klaseje
  // url kintamasis, nurodo i koki API endpoint'a krepsimes
  // Dokumentacija kokie duomenys grazinami:
  // https://rickandmortyapi.com/documentation/#character-schema
  private url: string = 'https://rickandmortyapi.com/api/character';
  // Iskeltas kintamasis, nes ji naudosime skritingose funkcijose,
  // character service api visada prasideda: 'https://rickandmortyapi.com/api/character'

  // Injectiname angular HttpClient
  // Konstruktorius
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
  getCharacters(page: number, name?: string) {
    console.log("Page parametras");
    console.log(page);

    // Sukuriamas angular Http Parametru objektas
    let params = new HttpParams();
    // Jei http Parametru objektas jau sukurtas, naudoti append funkcija prideti papildomiems parametrams
    // Pries siunciant uzklausa
    params = params.append('page', page);


    // Jei i funkcija perduota name reiksme, prideti paieskos parametra prie uzklausos
    // API Refference: https://rickandmortyapi.com/documentation/#character-schema
    if(name) {
      params = params.append('name', name);
    }

    console.log("API Uzklausa:");
    console.log(this.url);

    // Pasinaudodami angular HttpClient issiunciame get uzklausa i nurodyta url

    /* HTTP Kliento panaudojimo pavyzdziai: https://blog.angular-university.io/angular-http/  */
    let data = this.http.get(this.url, { params });

    return data;
  }



  /* TODO: Kaip atvaizduoti klaida, jei API grazina klaidinga atsakyma */
  // id - 1,183
  getCharacter(id: string | null) {
    let data = this.http.get(this.url + "/" + id);

    return data;
  }
}

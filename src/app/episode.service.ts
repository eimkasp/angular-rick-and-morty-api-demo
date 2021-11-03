import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Importuojame environment (aplinkos) kintamuosius
import { environment as env } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }


  // Pridedame prie bazinio API URL episode dali
  private url: string = env.API_URL + '/episode';

  /* Funkcija gauti visiems epizodams */
  getEpisodes() {
    console.log("getEpisodes Funkcija")
    return "labas";
  }



  // Atskira funkcija episodo gavimui pagal ID
  getEpisodeById(id : number) {

  }


  // Kadangi informacija is character dalies grazinama, kaip pilnas uzklausos url:
  // PVZ: 'https://rickandmortyapi.com/api/episode/1'
  // Todel naudosime bendrine funkcija, gauti
  // epizodo informacija pagal url, url bus atsiunciamas kaip parametras
  getEpisodeByUrl(url : string) {

    // console.log("Episode service API URL");
    // console.log(url);
    let data = this.http.get(url);

    return data;
  }
}

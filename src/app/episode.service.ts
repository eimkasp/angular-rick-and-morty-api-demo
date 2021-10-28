import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }


  // Kadangi informacija is character dalies grazinama, kaip pilnas uzklausos url:
  // PVZ: 'https://rickandmortyapi.com/api/episode/1'
  // Todel naudosime bendrine funkcija, gauti
  // epizodo informacija pagal url, url bus atsiunciamas kaip parametras
  getEpisodeByUrl(url : string) {

    console.log("Episode service API URL");
    console.log(url);
    let data = this.http.get(url);

    return data;
  }

  getEpisodeById(id : number) {

  }
}

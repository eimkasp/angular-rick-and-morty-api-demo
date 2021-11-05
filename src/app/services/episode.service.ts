import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Importuojame environment (aplinkos) kintamuosius
import { environment as env } from '../../environments/environment';
import { Episode } from '../interfaces/episode';


@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  // Pridedame prie bazinio API URL episode dali
  private url: string = env.API_URL + '/episode';


  constructor(private http: HttpClient) {
    console.log("Episode Service kreipsis i si url:" + this.url);
  }

  /* Funkcija gauti visiems epizodams */
  getEpisodes() {
    let data = this.http.get(this.url);
    return data;
  }



  // Atskira funkcija episodo gavimui pagal ID
  getEpisode(id: string | null) {


    // sita eilute sugeneruos uzklausa i url, kaip pvz:
    // https://rickandmortyapi.com/api/episode/1
    let data = this.http.get(this.url + "/" + id);

    return data;
  }


  // Kadangi informacija is character dalies grazinama, kaip pilnas uzklausos url:
  // PVZ: 'https://rickandmortyapi.com/api/episode/1'
  // Todel naudosime bendrine funkcija, gauti
  // epizodo informacija pagal url, url bus atsiunciamas kaip parametras
  getEpisodeByUrl(url: string) {

    // console.log("Episode service API URL");
    // console.log(url);
    let data = this.http.get(url);

    return data;
  }
}

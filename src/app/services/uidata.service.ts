import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIDataService {

  // Behaviour Subject sukurimas
  private pageSubject = new BehaviorSubject(1);

  constructor() {
  }

  // Getter
  getCharactersPage() : BehaviorSubject<number> {
    console.log('get character page funkcija');
    return this.pageSubject; // Graziname kintamaji kaip BehaviorSubject
  }

  // Setter
  setCharactersPage(page : number) {
    console.log('set character page funkcija');

    // Pakeiciame BehaviourSubject reiksme su .next() funkcija
    // Iskvietus sia funkcija, sureaguos visi komponentai ir services, kurios subscribina/prenumeruoja
    // getCharactersPage.subscribe();
    this.pageSubject.next(page);
    // this.charactersPage = page;
  }
}

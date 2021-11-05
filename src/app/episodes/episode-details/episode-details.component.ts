import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/interfaces/episode';
import { EpisodeService } from 'src/app/services/episode.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  private id : string | null;

  // Neprivalomas kintamasis, duomenis gausime is episode service
  public episode? : Episode;

  // Į šį kintamajį, išsaugosime visų veikėjų duomenis
  public characters : [] = [];

  // I si masyva, issaugosime visu reikalingu veikeju ID
  private charactersIds : any = [];

  constructor(private route: ActivatedRoute,
    private _episodeService : EpisodeService,
    private _characterService : CharacterService
    ) {
    // Gauname route'o /episodes/:id parametra (id)
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {

    // Asinchroninė funkcija

    // 1. Išsiunčiama užklausa duomenims gauti
    this._episodeService.getEpisode(this.id).subscribe(
      // Javascript callback dalis, ivykdoma, kai gaunami is api
      (data : any) => {
      //2. Ivykdomas callback gavus duomenis is api
      this.episode = data;
      console.log(this.episode);

      // 3. BUTINAI SUBSCRIBE FUNKCIJOS CALLBACK Viduje
      // Gauname veikėjų duomenis
      this.getCharacters();
    });


  }

  getCharacters() {
    // Patikriname ar episodo kintamasis turi duomenis
    if(this.episode) {

      // Pereiname per visus episodu veikeju masyvo elementus
      for(let i = 0; i < this.episode.characters.length; i++) {

        /*
        this.episode.characters[i] - string
        elemento reikes pvz: https://rickandmortyapi.com/api/character/435
         */
        let temp : string = this.episode.characters[i].replace("https://rickandmortyapi.com/api/character/", "");

        // Suformatuojame character ID is url temp kintamajame
        // console.log("this.episode.characters[i]: " + this.episode.characters[i]);
        // console.log("i: " + i);
        // console.log("temp: " + temp);

        this.charactersIds.push(temp);
        console.log(this.charactersIds.toString());
      }

      /* BUTINAI UZ CIKLO RIBU: */
      // Isvkviesti service gauti veikeju duomenims
      this._characterService.getCharacter(this.charactersIds).subscribe((data: any) => {
          this.characters = data;
      });
    }
  }

}

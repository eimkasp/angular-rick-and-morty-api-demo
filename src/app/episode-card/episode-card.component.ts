import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../interfaces/episode';
import { EpisodeService } from '../services/episode.service';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  // Cia gauname url reiksme pagal kuria epizodo komponentui reikia gauti duomenis is service
  @Input() episodeUrl? : string; // decorate the property with @Input()
  @Input() episode? : Episode; // Musu sukurtas interface'as /src/app/episode.ts faile


  constructor(private _episodeService: EpisodeService) { }

  ngOnInit(): void {

    // console.log("Character Episode List Component Duomenys");
    // console.log(this.episode);

    if(this.episodeUrl) { //  undefined
      this._episodeService.getEpisodeByUrl(this.episodeUrl).subscribe((data : any) => {
        this.episode = data;
        // console.log(this.episode);
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/episode';
import { EpisodeService } from 'src/app/episode.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {


  // ? - klaustukas reiskia, kad sitas kintamasis nera privalomas
  public episodes? : Episode[];

  constructor(private _episodeService: EpisodeService) { }

  ngOnInit(): void {
    this._episodeService.getEpisodes().subscribe((data : any) => {
      this.episodes = data.results;

      //console.log("Episodes duomenys is Service: ")
      //console.log(this.episodes);
    });
  }

  nextPage() {
    this._episodeService.getEpisodes().subscribe((data : any) => {
      this.episodes = data.results;

      //console.log("Episodes duomenys is Service: ")
      //console.log(this.episodes);
    });
  }

}

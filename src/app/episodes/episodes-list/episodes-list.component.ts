import { Component, OnInit } from '@angular/core';
import { EpisodeService } from 'src/app/episode.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

  public episodes : any;

  constructor(private _episodeService: EpisodeService) { }

  ngOnInit(): void {
    this._episodeService.getEpisodes();
  }

}

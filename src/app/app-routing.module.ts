import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { EpisodeDetailsComponent } from './episodes/episode-details/episode-details.component';
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component';

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: 'episodes', component: EpisodesListComponent },
  { path: 'episodes/:id', component: EpisodeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

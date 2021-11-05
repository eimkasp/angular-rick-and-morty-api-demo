import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { CharacterListComponent } from './components/characters/character-list/character-list.component';
import { EpisodeDetailsComponent } from './components/episodes/episode-details/episode-details.component';
import { EpisodesListComponent } from './components/episodes/episodes-list/episodes-list.component';

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

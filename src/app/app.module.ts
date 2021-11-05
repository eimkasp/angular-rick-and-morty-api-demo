import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/characters/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { CharacterService } from './services/character.service';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';


import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { CharacterEpisodesListComponent } from './components/characters/character-episodes-list/character-episodes-list.component';
import { EpisodeCardComponent } from './components/episodes/episode-card/episode-card.component';
import { EpisodesListComponent } from './components/episodes/episodes-list/episodes-list.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { EpisodeDetailsComponent } from './components/episodes/episode-details/episode-details.component';
import { CharacterCardComponent } from './components/characters/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    HeaderComponent,
    CharacterEpisodesListComponent,
    EpisodeCardComponent,
    EpisodesListComponent,
    SearchFormComponent,
    EpisodeDetailsComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdbCollapseModule,
    FormsModule
  ],
  // Duomenu tiekejai
  providers: [
    // Pridedame naujai sukurta service i providers masyva
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

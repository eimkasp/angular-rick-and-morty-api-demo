import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterService } from './character.service';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';


import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { CharacterEpisodesListComponent } from './character-episodes-list/character-episodes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    HeaderComponent,
    CharacterEpisodesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdbCollapseModule
  ],
  // Duomenu tiekejai
  providers: [
    // Pridedame naujai sukurta service i providers masyva
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

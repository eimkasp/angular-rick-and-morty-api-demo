import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterService } from './character.service';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // Duomenu tiekejai
  providers: [
    // Pridedame naujai sukurta service i providers masyva
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

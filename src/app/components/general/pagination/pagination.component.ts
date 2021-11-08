import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { UIDataService } from 'src/app/services/uidata.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  private page = 1;
  @Input() public pages : any;
  constructor(private _uiDataService: UIDataService,
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this._uiDataService.getCharactersPage().subscribe((data: number) => {
      // Priskiriame grazinta reiksme is dataService
      this.page = data;
    });
  }

  nextPage() {
    // Pridedame vieneta jei puslapio skaicius yra mazesnis uz bendra puslapiu kieki
    console.log(this.pages);
    if (this.pages > this.page) {
      this.page++;
      // Nustatome duomenis UIData service
      this._uiDataService.setCharactersPage(this.page);

      console.log("Next page:");
      console.log(this.page);
    }


  }

  previousPage() {

    // Patikriname ar page reiksme nera neigiama, -1 puslapio nera
    if (this.page > 1) {
      this.page--;
      // Nustatome duomenis UIData service
      this._uiDataService.setCharactersPage(this.page);
    }
  }

}

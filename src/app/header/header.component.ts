import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Klases objekto parametras title
  // tipas string
  // jo matomumas private - matomo tipai:

  /*
  private - galima naudoti tik toje klaseje, kuriuoje jis yra aprasomas
  protected - galima naudoti tik toje klaseje ir klasese kurios paveldi sia klase
  public

  */
  // Tipas string
  @Input() public title: string;

  // Tipas string masyvas []
  private buttons : string[];

  constructor() {
    this.title = "Rick And Morty API";

    this.buttons = [
      'Button 1',
      'Button 2'
    ];
  }

  /* Enkasuliacijos pavyzdys */
  /* Getter funkcija */
  getTitle() {
    return this.title;
  }

  /* Setter Funkcija */
  setTitle(title : string) {
    this.title = title;
  }

  ngOnInit(): void {
  }

}


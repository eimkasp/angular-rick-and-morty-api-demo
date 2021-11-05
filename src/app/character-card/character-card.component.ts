import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  // public character = {
  //   "name" : "test",
  //   "image" : "test",
  //   "id" : 1,
  // };

  // @Input dekoratorius, pasakantis komponento kintamajam
  // kad jis gali priimti duoomenis is parent komponentu
  @Input() public character : any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.character);
  }

}

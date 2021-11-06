import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {


  // Kintamasis i kuri issaugosime input laukelyje ivesta teksta
  public searchString : string = '';
  public status : string = '';

  /* Norint padaryti filtravima pagal kelis parametrus, turbut geriausia butu naudoti objekta, perduoti duomenims */
  public searchOptions = {
    name: '',
    status: '',
    gender: ''
  }

  @Output() onFormSubmit : EventEmitter<string> =  new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {

  }

  searchFormSubmit() {
    // Istransliuoti/pranesti apie ivykusi onFormSubmit event'a kitiems komponentams
    this.onFormSubmit.emit(this.searchString);
    // alert("You are searching for" + this.searchString);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RandomNameSelectorService } from '../random-name-selector.service'

import { factionData } from '../fakeFactionsList'

@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.css']
})
export class InputSelectorComponent implements OnInit {

  factionData = factionData;
  
  inputForm = new FormGroup({
    quantity: new FormControl(''),
    faction: new FormControl('')
  });
  
  constructor() { }

  ngOnInit() {
  }
  public onSubmit(): void {
    console.log(this.inputForm.value);
  }
}

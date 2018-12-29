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
  selectedItem:string;
  inputForm = new FormGroup({
    quantity: new FormControl(1),
    faction: new FormControl('')
  });
  
  constructor(private randomNameSelectorService: RandomNameSelectorService) { }

  ngOnInit() {
  }
  
  public selectedItemChanged(): void {
    console.log(this.selectedItem);
    // once we get a console log here, see if we can use this to load the nameList
  }
  public onSubmit(): void {
    console.log(this.factionData)
    this.randomNameSelectorService.generateButtonPressed(this.inputForm.value);
  }
}
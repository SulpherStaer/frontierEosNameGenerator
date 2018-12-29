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

  factionData = ['Aquila', 'Dugo', 'Ekanesh', 'Pendzal', 'Sona'];
  selectedItem:string;
  inputController:any;
  // this needs to be a .controller thing - but I don't know how to turn it into one.
  inputForm = new FormGroup({
    quantity: new FormControl(1),
    faction: new FormControl('')
  });
  
  constructor(private randomNameSelectorService: RandomNameSelectorService) { }

  ngOnInit() {
  }
  /* this doesn't work - but I don't know how else to get the .controller
  private inputControllerWrapper.controller('inputController', ['$scope', function($scope)) {
    
  } */
  
  public selectedItemChanged(): void {
    console.log(this.selectedItem);
    // once we get a console log here, see if we can use this to load the nameList
  }
  public onSubmit(): void {
    this.randomNameSelectorService.generateButtonPressed(this.inputForm.value);
  }
}
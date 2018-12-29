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
  inputControllerWrapper = angular.module('inputControllerWrapper',[]);
  inputForm = new FormGroup({
    quantity: new FormControl(1),
    faction: new FormControl('')
  });
  
  constructor(private randomNameSelectorService: RandomNameSelectorService) { }

  ngOnInit() {
  }

  //I don't know why this isn't working... The internet doesn't explain how to get a .controller in a component, just raw <script> included files.
  private inputControllerWrapper.controller('inputController', ['$scope', function($scope) {
  }]);
  
  public selectedItemChanged(): void {
    console.log(this.selectedItem);
    // once we get a console log here, see if we can use this to load the nameList
  }
  public onSubmit(): void {
    this.randomNameSelectorService.generateButtonPressed(this.inputForm.value);
  }
}
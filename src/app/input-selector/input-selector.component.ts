import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RandomNameSelectorService } from '../random-name-selector.service'
import { TranslateJsonToObjectService } from '../translate-json-to-object.service'

import nameListJson from '../../assets/namelists/nameListsList_v4.json';

@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.css']
})
export class InputSelectorComponent implements OnInit {
  nameListJson = nameListJson.nameListChoices; 
  selectedFaction:string;
  factionNameList:any;
  
  inputForm = new FormGroup({
    quantity: new FormControl(1),
    faction: new FormControl('Select Faction')
  });
  
  constructor(private randomNameSelectorService: RandomNameSelectorService, private translateJsonToObjectService: TranslateJsonToObjectService) { }

  ngOnInit() { console.log(nameListJson);
  }
  
  public selectedItemChanged(event: any): void {
    console.log('Selected faction changed. Pre-loading ' + event.target.value + 'NameList.');
    this.selectedFaction = event.target.value;
    //async is fucking me up, so we pre-load this, which fails, and call it again in RNS.service
    this.factionNameList = this.translateJsonToObjectService.readNameListFromFaction(this.selectedFaction);
  }
  
  public onSubmit(): void {
    console.log('Generate button pressed:');
    console.log(this.inputForm.value, this.factionNameList);
    this.randomNameSelectorService.generateButtonPressed(this.inputForm.value, this.factionNameList);
  }
}
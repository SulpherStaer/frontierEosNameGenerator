import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RandomNameSelectorService } from '../random-name-selector.service'
import { FengApiService } from '../feng-api.service'

import nameListJson from '../../assets/namelists/nameListsList_1904.json';

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
  
  constructor(private randomNameSelectorService: RandomNameSelectorService, private fengApiService: FengApiService) { }

  ngOnInit() { console.log(nameListJson);
  }
  
  public selectedItemChanged(event: any): void {
    this.selectedFaction = event.target.value;
    //async is fucking me up, so we pre-load this, which fails, and call it again in RNS.service
    this.factionNameList = this.fengApiService.readNameListFromFaction(this.selectedFaction);
  }
  
  public onSubmit(): void {
    this.randomNameSelectorService.generateButtonPressed(this.inputForm.value, this.factionNameList);
  }
}
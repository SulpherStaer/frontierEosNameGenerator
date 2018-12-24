import { Injectable } from '@angular/core';
import { InputSelectorComponent } from './input-selector/input-selector.component'
import { NameCardComponent } from './name-card/name-card.component'

@Injectable({
  providedIn: 'root'
})
export class RandomNameSelectorService {
  
  factionImageTopPath:string;
  factionImageBottomPath:string;
  nameData = [];
  pushToArray:any;
  loopCounter:number;

  constructor() { }
  
  public getInputSelectorFormData(dataFromInputSelectorForm): void {
    this.nameData = [];
    console.log("We should generate " + dataFromInputSelectorForm.quantity + " " + dataFromInputSelectorForm.faction + " name.");
        
    // our exportToArray variables will become different in the future - handle this properly
    // I expect it will look like (dataFromInputSelectorForm, randomName) and we won't have name1, 2, and 3 as seperate.
    this.exportToArray(dataFromInputSelectorForm);
    console.log(this.nameData);
  }
  
  private exportToArray(formInput): void {
    this.factionImageTopPath = this.getFactionImg(formInput, 'Top');
    this.factionImageBottomPath = this.getFactionImg(formInput, 'Bottom');
    for (this.loopCounter = 0; this.loopCounter < formInput.quantity; this.loopCounter++ ) {
      this.pushToArray = {
        factionName:formInput.faction,
        factionImageTop:this.factionImageTopPath,
        factionImageBottom:this.factionImageBottomPath,
        name1:'Sam',
        name2:'Porter',
        name3:'Karter',
        fullName:'Sam Porter Karter',
      };
      this.nameData.push(this.pushToArray);
    };
  }
  
  private getFactionImg(formInput, fileName): string {
    return './assets/images/cardBackgrounds/' + formInput.faction + fileName + '.png';
  }
}

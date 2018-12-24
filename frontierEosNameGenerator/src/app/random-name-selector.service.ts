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

    for (this.loopCounter = 0; this.loopCounter < dataFromInputSelectorForm.quantity; this.loopCounter++ ) {
      this.factionImageTopPath = this.getFactionImg(dataFromInputSelectorForm, 'Top');
      this.factionImageBottomPath = this.getFactionImg(dataFromInputSelectorForm, 'Bottom');
      this.pushToArray = {
        factionName:dataFromInputSelectorForm.faction,
        factionImageTop:this.factionImageTopPath,
        factionImageBottom:this.factionImageBottomPath,
        name1:'Sam',
        name2:'Porter',
        name3:'Karter',
        fullName:'Sam Porter Karter',
      };
      this.nameData.push(this.pushToArray);
    };
    console.log(this.nameData);
  }
 
  private getFactionImg(formInput, fileName): string {
    return './assets/images/cardBackgrounds/' + formInput.faction + fileName + '.png';
  }
}

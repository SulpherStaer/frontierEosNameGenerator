import { Injectable } from '@angular/core';
import { InputSelectorComponent } from './input-selector/input-selector.component'
import { NameCardComponent } from './name-card/name-card.component'
import { generatedName } from './generatedName';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class RandomNameSelectorService {
  
  receivedInputFormData: any;
  factionImageTopPath:string;
  factionImageBottomPath:string;
  nameData:generatedName[];
  counter:number;

  constructor() { }
  
  public getInputSelectorFormData(dataFromInputSelectorForm): void {
    this.receivedInputFormData = dataFromInputSelectorForm;
  
    console.log("We should generate " + this.receivedInputFormData.quantity + " " + this.receivedInputFormData.faction + " name.");

    for (this.counter = 0; this.counter < this.receivedInputFormData.quantity; this.counter++ ) {
      this.factionImageTopPath = "./assets/images/cardBackgrounds/" + this.receivedInputFormData.faction + "Top.png";
      this.factionImageBottomPath = "./assets/images/cardBackgrounds/" + this.receivedInputFormData.faction + "Bottom.png";
      // I keep overwriting my data instead of adding too it :c how do I fix this...
      this.nameData = this.nameData.concat( [
        {
          id:this.receivedInputFormData.quantity,
          factionName:this.receivedInputFormData.faction,
          factionColor:'237, 28, 36, 255',
          factionImageTop:this.factionImageTopPath,
          factionImageBottom:this.factionImageBottomPath,
          name1:'Sam',
          name2:'Porter',
          name3:'Karter',
          fullName:'Sam Porter Karter',
        },
      ]);
    };
    console.log(this.nameData);
  }
  
}

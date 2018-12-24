import { Injectable } from '@angular/core';
import { InputSelectorComponent } from './input-selector/input-selector.component'
import { NameCardComponent } from './name-card/name-card.component'
import { generatedName } from './generatedName';

@Injectable({
  providedIn: 'root'
})
export class RandomNameSelectorService {
  
  receivedInputFormData: any;
  factionImageTopPath:string;
  factionImageBottomPath:string;
  nameData:generatedName[];
  // need to declare my generatedName array here
  constructor() { }
  
  public getInputSelectorFormData(dataFromInputSelectorForm): void {
    this.receivedInputFormData = dataFromInputSelectorForm;
  
    console.log("We should generate " + this.receivedInputFormData.quantity + " " + this.receivedInputFormData.faction + " name.");
    // this foreach loop doesn't work - why not? >_> even forOwn doesn't work. What the fuck?!...
    forOwn (this.receivedInputFormData, function (value, key) {
    /*  this.factionImageTopPath = "./assets/images/cardBackgrounds/" + this.receivedInputFormData.faction + "Top.png";
      this.factionImageBottomPath = "./assets/images/cardBackgrounds/" + this.receivedInputFormData.faction + "Bottom.png";
      // the declare array below needs to turn into 'add this information to this array'
        this.nameData = [
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
        ]; */
        console.log(value);
        console.log(key);
    });
    console.log(this.nameData);
  }
  
}

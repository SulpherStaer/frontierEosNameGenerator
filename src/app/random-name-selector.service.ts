import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TranslateJsonToObjectService } from './translate-json-to-object.service'

@Injectable({
  providedIn: 'root'
})
export class RandomNameSelectorService {
  
  factionImageTopPath:string;
  factionImageBottomPath:string;
  factionNameList:any;
  generatedName:string;
  nameData: BehaviorSubject<any> = new BehaviorSubject(null);
  nameArray = [];
  pushToArray:any;
  loopCounter:number;
  nameLoopCounter:number;
  nameRandomNumber:number;

  constructor(private translateJsonToObjectService: TranslateJsonToObjectService) { }
  
  public generateButtonPressed(dataFromInputSelectorForm, selectedNameList): void {
    console.log("Generating " + dataFromInputSelectorForm.quantity + " " + dataFromInputSelectorForm.faction + " name(s).");
    // IS.component pre-loaded this, but async is fucking me up, so it is loaded again for real this time
    this.factionNameList = selectedNameList;
    this.factionNameList = this.translateJsonToObjectService.readNameListFromFaction(dataFromInputSelectorForm.faction);
    this.factionImageTopPath = this.resolveFactionImagePath(dataFromInputSelectorForm.faction, 'Top');
    this.factionImageBottomPath = this.resolveFactionImagePath(dataFromInputSelectorForm.faction, 'Bottom');
    this.exportToArray(dataFromInputSelectorForm);
  }
  
  private generateRandomName(): any {
    this.generatedName = '';
    for (this.nameLoopCounter = 0; this.nameLoopCounter < this.factionNameList.desiredOutput.length; this.nameLoopCounter++ ) {
      this.nameRandomNumber = Math.floor((Math.random() * this.factionNameList[this.factionNameList.desiredOutput[this.nameLoopCounter]].length));
      this.generatedName = this.generatedName + this.nameFirstLetterToUpperCase(this.factionNameList[this.factionNameList.desiredOutput[this.nameLoopCounter]][this.nameRandomNumber]);
    }
    return this.generatedName;
  }
  
  private exportToArray(formInput): void {
    this.nameArray = [];
    for (this.loopCounter = 0; this.loopCounter < formInput.quantity; this.loopCounter++ ) {
      this.pushToArray = {
        factionName:formInput.faction,
        factionImageTop:this.factionImageTopPath,
        factionImageBottom:this.factionImageBottomPath,
        fullName:this.generateRandomName(),
        customsDataOptionalRank:'', // custom text field
        customsDataOptionalICCID:'', // long ass number, ask thijs
        customsDataThreatAssesment:'', // danger pips 5
        customsDataCustomsDisposition:'', //access granted / denied / detain
        customsDataBastionClearance:'', //rank pips 3
        
      };
      this.nameArray.push(this.pushToArray);
      console.log('Presenting generated data:');
      console.log(this.nameArray);
    };
    this.updateNameData();
  }
  
  private updateNameData(): void {
    this.nameData.next(this.nameArray);
  }
  
  private resolveFactionImagePath(faction, position): string {
    return './assets/images/cardBackgrounds/' + faction + position + '.png';
  }
  
  private nameFirstLetterToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  public getNameDataFromService(): any {
    return this.nameData.asObservable();
  }
}

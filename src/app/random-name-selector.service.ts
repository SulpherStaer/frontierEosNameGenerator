import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TranslateJsonToObjectService } from './translate-json-to-object.service'

@Injectable({
  providedIn: 'root'
})
export class RandomNameSelectorService {
  
  sanitizedFactionName:string;
  factionImageTopPath:string;
  factionImageBottomPath:string;
  factionNameList:any;
  nameData: BehaviorSubject<any> = new BehaviorSubject(null);
  nameArray = [];

  constructor(private translateJsonToObjectService: TranslateJsonToObjectService) { }
  
  public generateButtonPressed(dataFromInputSelectorForm, selectedNameList): void {
    this.sanitizedFactionName = this.factionNameSanitation(dataFromInputSelectorForm.faction);
    console.log("Generating " + dataFromInputSelectorForm.quantity + " " + dataFromInputSelectorForm.faction + " name(s).");
    // IS.component pre-loaded this, but async is fucking me up, so it is loaded again for real this time
    this.factionNameList = selectedNameList;
    this.factionNameList = this.translateJsonToObjectService.readNameListFromFaction(dataFromInputSelectorForm.faction);
    this.factionImageTopPath = this.resolveFactionImagePath(this.sanitizedFactionName, 'Top');
    this.factionImageBottomPath = this.resolveFactionImagePath(this.sanitizedFactionName, 'Bottom');
    this.exportToArray(dataFromInputSelectorForm);
  }
  
  private generateRandomName(): any {
    let generatedName:string = '';
    for (let nameLoopCounter:number = 0; nameLoopCounter < this.factionNameList.desiredOutput.length; nameLoopCounter++ ) {
      let nameRandomNumber:number = Math.floor((Math.random() * this.factionNameList[this.factionNameList.desiredOutput[nameLoopCounter]].length));
      generatedName = generatedName + this.nameFirstLetterToUpperCase(this.factionNameList[this.factionNameList.desiredOutput[nameLoopCounter]][nameRandomNumber]);
    }
    return generatedName;
  }
  
  private exportToArray(formInput): void {
    this.nameArray = [];
    for (let loopCounter:number = 0; loopCounter < formInput.quantity; loopCounter++ ) {
      let pushToArray = {
        factionName:this.sanitizedFactionName,
        factionImageTop:this.factionImageTopPath,
        factionImageBottom:this.factionImageBottomPath,
        fullName:this.generateRandomName(),
        customsDataOptionalRank:'', // custom text field
        customsDataOptionalICCID:'', // long ass number, ask thijs
        customsDataThreatAssesment:'', // danger pips 5
        customsDataCustomsDisposition:'', //access granted / denied / detain
        customsDataBastionClearance:'', //rank pips 3
        
      };
      this.nameArray.push(pushToArray);
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
  private factionNameSanitation(string) {
    let cleanFactionName = [];
    cleanFactionName = string.split("_");
    return cleanFactionName[0];
  }
}

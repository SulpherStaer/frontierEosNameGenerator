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
    // we have the name list now
    // desiredOutput holds the things we want
    // for every desiredOutput, we need to see if there is such a named object in the whole namelist
    // for each of the found items, we calculate how much objects are inside said item, and rndNumber return 1 of them
    
    return 'Sam Porter Karter';
  }
  
  private exportToArray(formInput): void {
    this.nameArray = [];
    for (this.loopCounter = 0; this.loopCounter < formInput.quantity; this.loopCounter++ ) {
      this.pushToArray = {
        factionName:formInput.faction,
        factionImageTop:this.factionImageTopPath,
        factionImageBottom:this.factionImageBottomPath,
        fullName:this.generateRandomName(),
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
  
  public getNameDataFromService(): any {
    return this.nameData.asObservable();
  }
}

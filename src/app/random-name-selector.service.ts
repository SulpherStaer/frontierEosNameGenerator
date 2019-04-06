import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FengApiService } from './feng-api.service'

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

  constructor(private fengApiService: FengApiService) { }
  
  public generateButtonPressed(dataFromInputSelectorForm, selectedNameList): void {
    this.sanitizedFactionName = this.fengApiService.factionNameSanitation(dataFromInputSelectorForm.faction);
    console.log("Generating " + dataFromInputSelectorForm.quantity + " " + dataFromInputSelectorForm.faction + " name(s).");
    // IS.component pre-loaded this, but async is fucking me up, so it is loaded again for real this time
    this.factionNameList = selectedNameList;
    this.factionNameList = this.fengApiService.readNameListFromFaction(dataFromInputSelectorForm.faction);
    this.factionImageTopPath = this.fengApiService.resolveFactionImagePath(this.sanitizedFactionName, 'Top');
    this.factionImageBottomPath = this.fengApiService.resolveFactionImagePath(this.sanitizedFactionName, 'Bottom');
    this.exportToArray(dataFromInputSelectorForm);
  }
  
  private generateRandomName(): any {
    let generatedName:string = '';
    for (let nameLoopCounter:number = 0; nameLoopCounter < this.factionNameList.desiredOutput.length; nameLoopCounter++ ) {
      let nameRandomNumber:number = Math.floor((Math.random() * this.factionNameList[this.factionNameList.desiredOutput[nameLoopCounter]].length));
      generatedName = generatedName + this.fengApiService.firstLetterToUpperCase(this.factionNameList[this.factionNameList.desiredOutput[nameLoopCounter]][nameRandomNumber]);
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
      };
      this.nameArray.push(pushToArray);
    };
    this.updateNameData();
  }
  
  private updateNameData(): void {
    this.nameData.next(this.nameArray);
  }
  
  public getNameDataFromService(): any {
    return this.nameData.asObservable();
  }

}

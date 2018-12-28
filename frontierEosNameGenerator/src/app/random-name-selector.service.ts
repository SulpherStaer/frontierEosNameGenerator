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
  desiredNameList:any;
  nameData: BehaviorSubject<any> = new BehaviorSubject(null);
  nameArray = [];
  pushToArray:any;
  loopCounter:number;
  //fs = require('graceful-fs')

  constructor(private translateJsonToObjectService: TranslateJsonToObjectService) { }
  
  public generateButtonPressed(dataFromInputSelectorForm): void {
    console.log("We should generate " + dataFromInputSelectorForm.quantity + " " + dataFromInputSelectorForm.faction + " name.");
    
    this.factionImageTopPath = this.resolveFactionImagePath(dataFromInputSelectorForm.faction, 'Top');
    this.factionImageBottomPath = this.resolveFactionImagePath(dataFromInputSelectorForm.faction, 'Bottom');
    this.factionNameList = this.getFactionNameList(dataFromInputSelectorForm.faction);
    // our exportToArray variables will become different in the future - handle this properly
    // I expect it will look like (dataFromInputSelectorForm, randomName) and we won't have name1, 2, and 3 as seperate.
    this.exportToArray(dataFromInputSelectorForm);
  }
  
  async getFactionNameList(faction) {
    this.desiredNameList = await this.translateJsonToObjectService.readNameListFromFaction(faction);
    return this.desiredNameList;
  }

  
  private generateRandomName(faction): any {
    console.log(this.factionNameList)
    
    // I'm stuck trying to read / load my namelist - it says that it can't resolve, and I don't know why
    //this.factionNameList = loadJsonFile(this.factionNameListPath);
    //this.factionNameList = this.fs.readFileSync('./assets/namelists/AquilaNameList.json');
    
    return 'Sam Porter Karter';
    
  }
  
  private exportToArray(formInput): void {
    this.nameArray = [];
    for (this.loopCounter = 0; this.loopCounter < formInput.quantity; this.loopCounter++ ) {
      this.pushToArray = {
        factionName:formInput.faction,
        factionImageTop:this.factionImageTopPath,
        factionImageBottom:this.factionImageBottomPath,
        fullName:this.generateRandomName(formInput.faction),
      };
      this.nameArray.push(this.pushToArray);
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

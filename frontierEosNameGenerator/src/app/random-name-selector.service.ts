import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetFileWithHttpRequestService } from './get-file-with-http-request.service'

@Injectable({
  providedIn: 'root'
})
export class RandomNameSelectorService {
  
  factionImageTopPath:string;
  factionImageBottomPath:string;
  factionNameListPath:any;
  factionNameList:any;
  nameData: BehaviorSubject<any> = new BehaviorSubject(null);
  nameArray = [];
  pushToArray:any;
  loopCounter:number;
  //fs = require('graceful-fs')

  constructor(private getFileWithHttpRequestService: GetFileWithHttpRequestService) { }
  
  public generateButtonPressed(dataFromInputSelectorForm): void {
    console.log("We should generate " + dataFromInputSelectorForm.quantity + " " + dataFromInputSelectorForm.faction + " name.");
    
    this.factionImageTopPath = this.getFactionAssetFile('images/cardBackgrounds/', dataFromInputSelectorForm.faction, 'Top.png');
    this.factionImageBottomPath = this.getFactionAssetFile('images/cardBackgrounds/', dataFromInputSelectorForm.faction, 'Bottom.png');
    this.factionNameListPath = this.getFileWithHttpRequestService.getAssetFromPath('namelists/', dataFromInputSelectorForm.faction, 'NameList.json');
    // our exportToArray variables will become different in the future - handle this properly
    // I expect it will look like (dataFromInputSelectorForm, randomName) and we won't have name1, 2, and 3 as seperate.
    this.exportToArray(dataFromInputSelectorForm);
  }
  
  
  private generateRandomName(faction): any {
    console.log(this.factionNameListPath)
    
    // I'm stuck trying to read / load my namelist - it says that it can't resolve, and I don't know why
    //this.factionNameList = loadJsonFile(this.factionNameListPath);
    //this.factionNameList = this.fs.readFileSync('./assets/namelists/AquilaNameList.json');
    console.log(this.factionNameList)
    
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
  
  private getFactionAssetFile(path, faction, fileSuffixAndType): string {
    return './assets/' + path + faction + fileSuffixAndType;
  }
  
  public getNameDataFromService(): any {
    return this.nameData.asObservable();
  }
}

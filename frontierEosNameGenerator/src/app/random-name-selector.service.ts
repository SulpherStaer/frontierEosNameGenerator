import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNameSelectorService {
  
  factionImageTopPath:string;
  factionImageBottomPath:string;
  nameData: BehaviorSubject<any> = new BehaviorSubject(null);
  nameArray = [];
  pushToArray:any;
  loopCounter:number;

  constructor() { }
  
  public generateButtonPressed(dataFromInputSelectorForm): void {
    console.log("We should generate " + dataFromInputSelectorForm.quantity + " " + dataFromInputSelectorForm.faction + " name.");
        
    // our exportToArray variables will become different in the future - handle this properly
    // I expect it will look like (dataFromInputSelectorForm, randomName) and we won't have name1, 2, and 3 as seperate.
    this.exportToArray(dataFromInputSelectorForm);
    console.log(this.nameArray);
  }
  
  private exportToArray(formInput): void {
    this.nameArray = [];
    this.factionImageTopPath = this.getFactionAssetFile('images/cardBackgrounds/', formInput, 'Top.png');
    this.factionImageBottomPath = this.getFactionAssetFile('images/cardBackgrounds/', formInput, 'Bottom.png');
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
      this.nameArray.push(this.pushToArray);
    };
    this.updateNameData();
  }
  
  public updateNameData(): void {
    this.nameData.next(this.nameArray);
  }
  
  private getFactionAssetFile(path, formInput, fileSuffixAndType): string {
    return './assets/' + path + formInput.faction + fileSuffixAndType;
  }
  
  public getNameDataFromService(): any {
    return this.nameData.asObservable();
  }
}

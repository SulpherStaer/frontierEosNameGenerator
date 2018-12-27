import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FactionNameListClass } from './faction-name-list-class'

@Injectable({
  providedIn: 'root'
})
export class TranslateJsonToObjectService {
  
  factionNameList:FactionNameListClass;
  output:any;
  
  private getNameListWithHttpRequest(location) {
    return this.http.get<FactionNameListClass>(location);
  }
  
  public readNameListFromFaction(factionName) {
    this.output = this.getNameListWithHttpRequest('./assets/namelists/' + factionName + 'NameList.json')
    .subscribe((data: FactionNameListClass) => this.factionNameList = { ... data });
    console.log(this.output)
    // getting an error when trying to log the factionNameList - not sure what's wrong - unexpected symbols?
    console.log(this.factionNameList)
  }

  constructor(private http: HttpClient) { }
}

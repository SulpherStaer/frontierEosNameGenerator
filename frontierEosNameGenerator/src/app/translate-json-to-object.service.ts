import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
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
    this.getNameListWithHttpRequest('./assets/namelists/' + factionName + 'NameList.json')
    .map(data) => data.json as Array<Item>
    .subscribe(data => {
      this.factionNameList = data;
      console.log(this.factionNameList);
    });
    // Internet! You're no help at all! https://stackoverflow.com/questions/44042223/load-json-from-local-file-with-http-get-in-angular-2/44042788
    
  }

  constructor(private http: HttpClient) { }
}

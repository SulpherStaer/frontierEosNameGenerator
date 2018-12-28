import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FactionNameListClass } from './faction-name-list-class'

@Injectable({
  providedIn: 'root'
})
export class TranslateJsonToObjectService {
  
  factionNameList:any;
  
  private getNameListWithHttpRequest(location) {
    return this.http.get<FactionNameListClass>(location);
  }
  
  public readNameListFromFaction(factionName) {

    console.log(`readNameListFromFaction: ${factionName}`);
    this.getNameListWithHttpRequest('./assets/namelists/' + factionName + 'NameList.json').toPromise().then(
      data => (
        this.factionNameList = data
      ),
      error => (
        this.factionNameList = 'error'
      )
    );
    
    return this.factionNameList;
  }
    
    

  constructor(private http: HttpClient) { }
}

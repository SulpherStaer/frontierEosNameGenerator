import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FengApiService {
  factionNameList:any;
  
  public readNameListFromFaction(factionName) {

    this.http.get('./assets/namelists/' + factionName + 'NameList.json').toPromise().then(
      data => (
        this.factionNameList = data
        
      ),
      error => (
        this.factionNameList = 'error'
      )
    );
    return this.factionNameList;
  }
  public resolveFactionImagePath(faction, position): string {
    return './assets/images/cardBackgrounds/' + faction + position + '.png';
  }
  
  public firstLetterToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  public factionNameSanitation(string) {
    let cleanFactionName = [];
    cleanFactionName = string.split("_");
    return cleanFactionName[0];
  }
    

  constructor(private http: HttpClient) { }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetFileWithHttpRequestService {
  
  public getAssetFromPath(path,faction,fileSuffixAndType) {
    return this.http.get('./assets/' + path + faction + fileSuffixAndType);
  }
  
  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { Endpoints } from '../models/SetUp';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private baseUrl = environment.BASE_URL;
  settings:any;
  private keyValueStoreMap: Map<string[], string> = new Map();

  constructor(private http: HttpClient) {}

  updateKeyValueStore(path: any, value: any){
      this.keyValueStoreMap.set(path,value);
  }

  updateOnApplyChanges(key: string): void {
    let count=0;
    this.keyValueStoreMap.forEach((value, currentKey) => {
      if(currentKey[0]==key){
        this.updateSettings(currentKey,value);
        this.keyValueStoreMap.delete(currentKey);
        count++;
      }
    });
    if(count>0){
      this.updateAlertsData(Endpoints[Endpoints.settings]);
    }
  }
  
  getAlertsData(type: string){
    const apiUrl = `${this.baseUrl}/${type}`;
    return this.http.get<any>(apiUrl);
  }

  updateAlertsData(type:string){
    const apiUrl = `${this.baseUrl}/${type}`;
    this.http.post(apiUrl, this.settings).subscribe();
  }
  
  updateSettings(path: string[], newValue: string): void {
    let target=this.settings;
    for (let i= 0;i<path.length-1;i++) {
        target = target[path[i]];
    }
    const finalKey = path[path.length - 1];
    if(!target[finalKey].default){
      target[finalKey].emails = newValue;
    }else{
      target[finalKey].default = newValue;
    }
  }


}


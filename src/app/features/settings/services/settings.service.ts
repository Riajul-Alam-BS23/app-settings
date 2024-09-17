import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

interface KeyValue{
  key:string[],
  value:string
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private baseUrl = environment.BASE_URL;
  settings:any;
  keyValueStore:KeyValue[]=[];
  private keyValueStoreMap: Map<string[], string> = new Map();
  constructor(private http: HttpClient) {}
  updateKeyValueStore(path: any, value: any){
      this.keyValueStore.push({key:path,value:value});
      this.keyValueStoreMap.set(path,value);
  }
  count=0;
  updateOnApplyChanges(key: string): void {
    console.log("Store ",this.keyValueStore)
    const indicesToRemove: number[] = [];
    this.count=0;

    // Map check
    this.keyValueStoreMap.forEach((value, key) => {
      console.log('Key:', key);
      console.log('Value:', value);
      this.updateSettings(key,value);
    });
    
    // check end
    for (let i = 0; i < this.keyValueStore.length; i++) {
      if (this.keyValueStore[i].key[1] == key) {
        this.count++;
        console.log("count",this.count)
        this.updateSettings(this.keyValueStore[i].key, this.keyValueStore[i].value);
        indicesToRemove.push(i);
      }
    }

    if(indicesToRemove.length>0)this.updateAlertsData();
    
    for (let i = indicesToRemove.length - 1; i >= 0; i--) {
      this.keyValueStore.splice(indicesToRemove[i], 1);
    }
  }
  
  getAlertsData(type: any){
    const apiUrl = `${this.baseUrl}/${type}`;
    return this.http.get<any>(apiUrl);
  }
  updateAlertsData(){
    const apiUrl = `${this.baseUrl}/settings`;
    this.http.post(apiUrl, this.settings).subscribe();
  }
  updateSettings(path: string[], newValue: any): void {
    let target = this.settings;
    for (let i = 1; i < path.length - 1; i++) {
      if (target[path[i]] !== undefined) {
        target = target[path[i]];
      } else {
        console.error(`Path not found: ${path[i]}`);
        return;
      }
    }
  
    const finalKey = path[path.length - 1];
    if (target[finalKey] !== undefined) {
      !target[finalKey].default? target[finalKey].emails = newValue:target[finalKey].default = newValue;
      if(!target[finalKey].default){
        // target[finalKey].emails = newValue;
        console.log("ami emails updated",finalKey);
      }else{
        // target[finalKey].default = newValue;
      } 
    } else {
      console.error(`Property not found: ${finalKey}`);
      return;
    }
  }
  
  
}
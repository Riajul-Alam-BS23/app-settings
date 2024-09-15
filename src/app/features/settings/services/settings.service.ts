import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'
import { PostData } from '../models/PostData';

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

  constructor(private http: HttpClient) {}
  updateKeyValueStore(path: any, value: any){
      this.keyValueStore.push({key:path,value:value});
  }
  updateOnApplyChanges(key: string): void {
    console.log(this.keyValueStore)
    const indicesToRemove: number[] = [];
    
    for (let i = 0; i < this.keyValueStore.length; i++) {
      console.log("inside ",this.keyValueStore[i].key[1])
      if (this.keyValueStore[i].key[1] == key) {
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
    console.log("api url ",apiUrl)
    return this.http.get<any>(apiUrl);
  }
  updateAlertsData(){
    const apiUrl = `${this.baseUrl}/settings`;
    this.http.post(apiUrl, this.settings).subscribe();
  }
  updateSettings(path: string[], newValue: any): void {
    let target = this.settings;

    for (let i = 0; i < path.length - 1; i++) {
      target = target[path[i]];
      if (!target) {
        return;
      }
    }

    const finalKey = path[path.length - 1];
    if (target[finalKey] !== undefined) {
      target[finalKey].default = newValue;
    } else {
      return;
    }
    this.settings=target;
  }
  
}
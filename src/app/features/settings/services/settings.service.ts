import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'
import { PostData } from '../models/PostData';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private baseUrl = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getAlertsData(type: string):Observable<any> {
    const apiUrl = `${this.baseUrl}/${type}`;
    return this.http.get<any>(apiUrl);
  }

  updateAlertsData(data:PostData){
    const apiUrl = `${this.baseUrl}/${data.name}`;
    console.log("data in service update ",data.data);
    this.http.post(apiUrl, data.data).subscribe();
  }

  updateCombineAlertsData(data:PostData[]){
    for(let i=0;i<data.length;i++){
      this.updateAlertsData(data[i]);
    }
  }
  
  getCombinedData(types: string[]): Observable<any> {
    const observables = types.reduce((acc, type) => {
      acc[type] = this.getAlertsData(type);
      return acc;
    }, {} as { [key: string]: Observable<any> });
    return forkJoin(observables);
  }




}

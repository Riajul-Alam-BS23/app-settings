import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { Endpoints } from '../models/SetUp';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private baseUrl = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  
  getAlertsData(type: string){
    const apiUrl = `${this.baseUrl}/${type}`;
    return this.http.get<any>(apiUrl);
  }

  updateAlertsData(section:any){ 
    const update={
      [section.key]: section.value['value']
    }
    const apiUrl = `${this.baseUrl}/${Endpoints[Endpoints.settings]}`;
    this.http.patch(apiUrl, update).subscribe();
  }

}


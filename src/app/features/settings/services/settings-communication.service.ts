import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsCommunicationService {
  private showApplyChanges$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  updateApplyChangesState(currentState:boolean):void{
    this.showApplyChanges$.next(currentState);
  }

  getApplyChangesState(): Observable<boolean>{
    return this.showApplyChanges$.asObservable();
  }
  
}

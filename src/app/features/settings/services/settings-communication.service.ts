import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsCommunicationService {
  private showApplyChanges = new BehaviorSubject<boolean>(false);

  constructor() { }

  updateApplyChanges(currentState:boolean){
    this.showApplyChanges.next(currentState);
  }

  getShowApplyChanges(){
    return this.showApplyChanges;
  }
  
}

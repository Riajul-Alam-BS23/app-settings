import { TestBed } from '@angular/core/testing';

import { SettingsCommunicationService } from './settings-communication.service';

describe('SettingsCommunicationService', () => {
  let service: SettingsCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

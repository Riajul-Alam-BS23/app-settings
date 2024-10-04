import { TestBed } from '@angular/core/testing';
import { SettingsService } from './settings.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Import necessary testing modules

describe('SettingsService', () => {
  let service: SettingsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [SettingsService]
    });

    service = TestBed.inject(SettingsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding HTTP requests after each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch alerts data', () => {
    const dummyData = { key: 'value' };
    service.getAlertsData('settings').subscribe((data) => {
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/settings`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData); // Respond with dummy data
  });

  it('should update alerts data', () => {
    const section = { key: 'someKey', value: { value: 'someValue' } };

    service.updateAlertsData(section);

    const req = httpMock.expectOne(`${service['baseUrl']}/settings`);
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual({ someKey: 'someValue' });
    req.flush({}); // Mock successful patch response
  });
});

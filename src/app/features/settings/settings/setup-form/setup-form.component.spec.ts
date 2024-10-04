import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SetupFormComponent } from './setup-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from 'src/app/features/settings/services/settings.service';
import { Endpoints } from 'src/app/features/settings/models/SetUp';
import { of } from 'rxjs';

describe('SetupFormComponent', () => {
  let component: SetupFormComponent;
  let fixture: ComponentFixture<SetupFormComponent>;
  let settingsServiceMock: jasmine.SpyObj<SettingsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [SetupFormComponent],
      providers: [
        FormBuilder,
        { provide: SettingsService, useValue: jasmine.createSpyObj('SettingsService', ['getAlertsData', 'updateAlertsData']) }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFormComponent);
    component = fixture.componentInstance;
    settingsServiceMock = TestBed.inject(SettingsService) as jasmine.SpyObj<SettingsService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form on init', () => {
    const data = { key1: 'value1', key2: ['value2', 'value3'] };
    settingsServiceMock.getAlertsData.and.returnValue(of(data));
    fixture.detectChanges();
    expect(component.form).toBeDefined();
    expect(component.form.controls).toBeDefined();
  });

  it('should build form correctly', () => {
    const data = { key1: 'value1', key2: ['value2', 'value3'] };
    const form = component.buildForm(data);
    expect(form.controls).toBeDefined();
  });

  it('should add email correctly', () => {
    const subSection = { value: { default: 'test@examp', emails: [] } };
    component.addEmail(subSection);
    expect(subSection.value.emails).toContain('test@examp');
  });

  it('should remove email correctly', () => {
    const subSection = { value: { default: '', emails: ['test@example.com', 'test2@example.com'] } };
    component.removeEmail(0, subSection.value.emails, component.form);
    expect(subSection.value.emails).not.toContain('test@example.com');
  });

  it('should check if data is object correctly', () => {
    const data = { value: { default: 'test@example.com', emails: [] } };
    expect(component.isObject(data)).toBeTrue();
  });

  it('should apply changes correctly', () => {
    const section = { value: { default: 'test@example.com', emails: [] } };
    component.onApplyChange(section);
    expect(settingsServiceMock.updateAlertsData).toHaveBeenCalledTimes(1);
  });

  it('should get background color correctly', () => {
    const subSection = { value: { default: 'test@example.com', emails: [], isHighlighted: 'true' } };
    expect(component.getBackgroundColor(subSection)).toEqual({ 'background-color': '#ECECED' });
  });

  it('should track by key correctly', () => {
    const item = { key: 'key1' };
    expect(component.trackByKey(0, item)).toBe('key1');
  });
});
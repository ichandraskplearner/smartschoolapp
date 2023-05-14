import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionReportContentComponent } from './admission-report-content.component';

describe('AdmissionReportContentComponent', () => {
  let component: AdmissionReportContentComponent;
  let fixture: ComponentFixture<AdmissionReportContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionReportContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionReportContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionRightContentComponent } from './admission-right-content.component';

describe('AdmissionRightContentComponent', () => {
  let component: AdmissionRightContentComponent;
  let fixture: ComponentFixture<AdmissionRightContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionRightContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionRightContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

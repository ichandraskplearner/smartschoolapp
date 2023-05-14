import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCommentsComponent } from './admission-comments.component';

describe('AdmissionCommentsComponent', () => {
  let component: AdmissionCommentsComponent;
  let fixture: ComponentFixture<AdmissionCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

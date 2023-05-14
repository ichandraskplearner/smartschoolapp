import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogoHeaderComponent } from './app-logo-header.component';

describe('AppLogoHeaderComponent', () => {
  let component: AppLogoHeaderComponent;
  let fixture: ComponentFixture<AppLogoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLogoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLogoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

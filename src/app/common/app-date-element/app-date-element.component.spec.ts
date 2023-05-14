import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDateElementComponent } from './app-date-element.component';

describe('AppDateElementComponent', () => {
  let component: AppDateElementComponent;
  let fixture: ComponentFixture<AppDateElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDateElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

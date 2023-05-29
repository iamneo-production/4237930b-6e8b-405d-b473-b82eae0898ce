import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionformComponent } from './admissionform.component';

describe('AdmissionformComponent', () => {
  let component: AdmissionformComponent;
  let fixture: ComponentFixture<AdmissionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

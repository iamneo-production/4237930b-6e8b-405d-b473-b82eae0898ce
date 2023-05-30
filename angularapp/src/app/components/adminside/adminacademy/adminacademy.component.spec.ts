import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminacademyComponent } from './adminacademy.component';

describe('AdminacademyComponent', () => {
  let component: AdminacademyComponent;
  let fixture: ComponentFixture<AdminacademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminacademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminacademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

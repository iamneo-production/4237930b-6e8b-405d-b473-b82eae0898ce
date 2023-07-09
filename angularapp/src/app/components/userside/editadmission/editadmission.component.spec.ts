import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadmissionComponent } from './editadmission.component';

describe('EditadmissionComponent', () => {
  let component: EditadmissionComponent;
  let fixture: ComponentFixture<EditadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

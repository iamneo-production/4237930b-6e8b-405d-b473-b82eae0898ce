import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinstituteComponent } from './editinstitute.component';

describe('EditinstituteComponent', () => {
  let component: EditinstituteComponent;
  let fixture: ComponentFixture<EditinstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinsituteComponent } from './editinsitute.component';

describe('EditinsituteComponent', () => {
  let component: EditinsituteComponent;
  let fixture: ComponentFixture<EditinsituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinsituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinsituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

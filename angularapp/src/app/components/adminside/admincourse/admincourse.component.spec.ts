import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincourseComponent } from './admincourse.component';

describe('AdmincourseComponent', () => {
  let component: AdmincourseComponent;
  let fixture: ComponentFixture<AdmincourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

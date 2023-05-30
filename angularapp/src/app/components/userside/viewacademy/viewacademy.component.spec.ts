import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewacademyComponent } from './viewacademy.component';

describe('ViewacademyComponent', () => {
  let component: ViewacademyComponent;
  let fixture: ComponentFixture<ViewacademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewacademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewacademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

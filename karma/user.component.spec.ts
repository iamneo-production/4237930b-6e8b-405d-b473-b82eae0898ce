import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [UserComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });
  it('FE_userTest', () => {
    expect(component).toBeTruthy();
  });
});
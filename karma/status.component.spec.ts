import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [StatusComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
  });
  it('FE_statusTest', () => {
    expect(component).toBeTruthy();
  });
});
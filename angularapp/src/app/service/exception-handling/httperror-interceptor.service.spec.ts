import { TestBed } from '@angular/core/testing';

import { HttperrorInterceptorService } from './httperror-interceptor.service';

describe('HttperrorInterceptorService', () => {
  let service: HttperrorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttperrorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

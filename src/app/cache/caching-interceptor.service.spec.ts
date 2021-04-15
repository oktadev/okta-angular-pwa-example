import { TestBed } from '@angular/core/testing';

import { CachingInterceptorService } from './caching-interceptor.service';

describe('CachingInterceptorService', () => {
  let service: CachingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpreqsService } from './httpreqs.service';

describe('HttpreqsService', () => {
  let service: HttpreqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpreqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

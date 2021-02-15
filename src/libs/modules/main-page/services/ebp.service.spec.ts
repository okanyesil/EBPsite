import { TestBed } from '@angular/core/testing';

import { EbpService } from './ebp.service';

describe('EbpService', () => {
  let service: EbpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

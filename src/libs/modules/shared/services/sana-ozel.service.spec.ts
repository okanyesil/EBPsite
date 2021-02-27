import { TestBed } from '@angular/core/testing';

import { SanaOzelService } from './sana-ozel.service';

describe('SanaOzelService', () => {
  let service: SanaOzelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanaOzelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

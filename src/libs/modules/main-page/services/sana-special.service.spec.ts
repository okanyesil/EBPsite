import { TestBed } from '@angular/core/testing';

import { SanaSpecialService } from './sana-special.service';

describe('SanaSpecialService', () => {
  let service: SanaSpecialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanaSpecialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

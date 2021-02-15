import { TestBed } from '@angular/core/testing';

import { EbpSectikleriService } from './ebp-sectikleri.service';

describe('EbpSectikleriService', () => {
  let service: EbpSectikleriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbpSectikleriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NewReleasedService } from './new-released.service';

describe('NewReleasedService', () => {
  let service: NewReleasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewReleasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

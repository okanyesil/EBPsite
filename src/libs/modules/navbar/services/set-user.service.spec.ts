import { TestBed } from '@angular/core/testing';

import { SetUserService } from './set-user.service';

describe('SetUserService', () => {
  let service: SetUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

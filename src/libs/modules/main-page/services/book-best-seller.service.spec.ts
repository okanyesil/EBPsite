import { TestBed } from '@angular/core/testing';

import { BookBestSellerService } from './book-best-seller.service';

describe('BookBestSellerService', () => {
  let service: BookBestSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookBestSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

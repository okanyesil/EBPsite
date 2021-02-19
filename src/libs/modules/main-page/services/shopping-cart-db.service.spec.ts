import { TestBed } from '@angular/core/testing';

import { ShoppingCartDbService } from './shopping-cart-db.service';

describe('ShoppingCartDbService', () => {
  let service: ShoppingCartDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

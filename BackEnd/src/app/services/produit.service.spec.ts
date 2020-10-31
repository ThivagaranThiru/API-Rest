import { TestBed } from '@angular/core/testing';

import { ProduitService } from './produit.service';

describe('ProduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ProduitService]
  }));

  it('should be created', () => {
    const service: ProduitService = TestBed.get(ProduitService);
    expect(service).toBeTruthy();
  });
});

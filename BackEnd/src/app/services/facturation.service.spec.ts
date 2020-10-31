import { TestBed } from '@angular/core/testing';

import { FacturationService } from './facturation.service';

describe('FacturationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [FacturationService]
  }));

  it('should be created', () => {
    const service: FacturationService = TestBed.get(FacturationService);
    expect(service).toBeTruthy();
  });
});

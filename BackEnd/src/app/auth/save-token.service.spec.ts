import { TestBed } from '@angular/core/testing';

import { SaveTokenService } from './save-token.service';

describe('SaveTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SaveTokenService]
  }));

  it('should be created', () => {
    const service: SaveTokenService = TestBed.get(SaveTokenService);
    expect(service).toBeTruthy();
  });
});

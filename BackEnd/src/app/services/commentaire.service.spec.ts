import { TestBed } from '@angular/core/testing';

import { CommentaireService } from './commentaire.service';

describe('CommentaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CommentaireService]
  }));

  it('should be created', () => {
    const service: CommentaireService = TestBed.get(CommentaireService);
    expect(service).toBeTruthy();
  });
});

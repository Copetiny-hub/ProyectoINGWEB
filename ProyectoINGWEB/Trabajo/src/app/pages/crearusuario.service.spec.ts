import { TestBed } from '@angular/core/testing';

import { CrearusuarioService } from './crearusuario.service';

describe('CrearusuarioService', () => {
  let service: CrearusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

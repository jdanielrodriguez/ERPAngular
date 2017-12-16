import { TestBed, inject } from '@angular/core/testing';

import { GastosService } from './gastos.service';

describe('GastosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GastosService]
    });
  });

  it('should be created', inject([GastosService], (service: GastosService) => {
    expect(service).toBeTruthy();
  }));
});

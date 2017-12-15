import { TestBed, inject } from '@angular/core/testing';

import { MovimientosPagarService } from './movimientos-pagar.service';

describe('MovimientosPagarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovimientosPagarService]
    });
  });

  it('should be created', inject([MovimientosPagarService], (service: MovimientosPagarService) => {
    expect(service).toBeTruthy();
  }));
});

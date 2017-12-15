import { TestBed, inject } from '@angular/core/testing';

import { MovimientosCobrarService } from './movimientos-cobrar.service';

describe('MovimientosCobrarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovimientosCobrarService]
    });
  });

  it('should be created', inject([MovimientosCobrarService], (service: MovimientosCobrarService) => {
    expect(service).toBeTruthy();
  }));
});

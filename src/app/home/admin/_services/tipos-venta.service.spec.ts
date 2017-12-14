import { TestBed, inject } from '@angular/core/testing';

import { TiposVentaService } from './tipos-venta.service';

describe('TiposVentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposVentaService]
    });
  });

  it('should be created', inject([TiposVentaService], (service: TiposVentaService) => {
    expect(service).toBeTruthy();
  }));
});

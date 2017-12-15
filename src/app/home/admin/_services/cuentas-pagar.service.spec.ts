import { TestBed, inject } from '@angular/core/testing';

import { CuentasPagarService } from './cuentas-pagar.service';

describe('CuentasPagarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuentasPagarService]
    });
  });

  it('should be created', inject([CuentasPagarService], (service: CuentasPagarService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CuentasCobrarService } from './cuentas-cobrar.service';

describe('CuentasCobrarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuentasCobrarService]
    });
  });

  it('should be created', inject([CuentasCobrarService], (service: CuentasCobrarService) => {
    expect(service).toBeTruthy();
  }));
});

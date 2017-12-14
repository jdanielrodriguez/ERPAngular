import { TestBed, inject } from '@angular/core/testing';

import { TiposCompraService } from './tipos-compra.service';

describe('TiposCompraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposCompraService]
    });
  });

  it('should be created', inject([TiposCompraService], (service: TiposCompraService) => {
    expect(service).toBeTruthy();
  }));
});

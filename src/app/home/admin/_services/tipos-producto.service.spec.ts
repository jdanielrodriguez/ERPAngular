import { TestBed, inject } from '@angular/core/testing';

import { TiposProductoService } from './tipos-producto.service';

describe('TiposProductoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposProductoService]
    });
  });

  it('should be created', inject([TiposProductoService], (service: TiposProductoService) => {
    expect(service).toBeTruthy();
  }));
});

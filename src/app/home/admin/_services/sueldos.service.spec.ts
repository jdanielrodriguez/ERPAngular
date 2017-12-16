import { TestBed, inject } from '@angular/core/testing';

import { SueldosService } from './sueldos.service';

describe('SueldosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SueldosService]
    });
  });

  it('should be created', inject([SueldosService], (service: SueldosService) => {
    expect(service).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPagarPagadasComponent } from './cuentas-pagar-pagadas.component';

describe('CuentasPagarPagadasComponent', () => {
  let component: CuentasPagarPagadasComponent;
  let fixture: ComponentFixture<CuentasPagarPagadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasPagarPagadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasPagarPagadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

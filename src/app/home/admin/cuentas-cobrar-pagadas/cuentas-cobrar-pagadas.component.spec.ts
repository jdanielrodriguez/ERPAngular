import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasCobrarPagadasComponent } from './cuentas-cobrar-pagadas.component';

describe('CuentasCobrarPagadasComponent', () => {
  let component: CuentasCobrarPagadasComponent;
  let fixture: ComponentFixture<CuentasCobrarPagadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasCobrarPagadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasCobrarPagadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

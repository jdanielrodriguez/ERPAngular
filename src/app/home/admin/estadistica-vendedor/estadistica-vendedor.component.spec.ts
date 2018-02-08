import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaVendedorComponent } from './estadistica-vendedor.component';

describe('EstadisticaVendedorComponent', () => {
  let component: EstadisticaVendedorComponent;
  let fixture: ComponentFixture<EstadisticaVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

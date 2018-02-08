import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaClientesComponent } from './estadistica-clientes.component';

describe('EstadisticaClientesComponent', () => {
  let component: EstadisticaClientesComponent;
  let fixture: ComponentFixture<EstadisticaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaVentasComponent } from './estadistica-ventas.component';

describe('EstadisticaVentasComponent', () => {
  let component: EstadisticaVentasComponent;
  let fixture: ComponentFixture<EstadisticaVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

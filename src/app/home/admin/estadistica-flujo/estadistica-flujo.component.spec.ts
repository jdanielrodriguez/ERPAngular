import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaFlujoComponent } from './estadistica-flujo.component';

describe('EstadisticaFlujoComponent', () => {
  let component: EstadisticaFlujoComponent;
  let fixture: ComponentFixture<EstadisticaFlujoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaFlujoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaFlujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

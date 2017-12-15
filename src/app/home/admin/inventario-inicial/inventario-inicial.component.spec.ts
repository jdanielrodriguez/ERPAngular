import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioInicialComponent } from './inventario-inicial.component';

describe('InventarioInicialComponent', () => {
  let component: InventarioInicialComponent;
  let fixture: ComponentFixture<InventarioInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

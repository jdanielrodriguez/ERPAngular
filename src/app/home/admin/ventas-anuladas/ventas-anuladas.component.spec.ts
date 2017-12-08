import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasAnuladasComponent } from './ventas-anuladas.component';

describe('VentasAnuladasComponent', () => {
  let component: VentasAnuladasComponent;
  let fixture: ComponentFixture<VentasAnuladasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasAnuladasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasAnuladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

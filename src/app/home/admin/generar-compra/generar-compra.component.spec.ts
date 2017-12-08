import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCompraComponent } from './generar-compra.component';

describe('GenerarCompraComponent', () => {
  let component: GenerarCompraComponent;
  let fixture: ComponentFixture<GenerarCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

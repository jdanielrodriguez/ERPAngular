import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarOrdenComponent } from './generar-orden.component';

describe('GenerarOrdenComponent', () => {
  let component: GenerarOrdenComponent;
  let fixture: ComponentFixture<GenerarOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

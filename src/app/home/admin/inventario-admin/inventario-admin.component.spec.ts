import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioAdminComponent } from './inventario-admin.component';

describe('InventarioAdminComponent', () => {
  let component: InventarioAdminComponent;
  let fixture: ComponentFixture<InventarioAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

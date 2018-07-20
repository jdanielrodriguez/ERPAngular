import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSaldosComponent } from './balance-saldos.component';

describe('BalanceSaldosComponent', () => {
  let component: BalanceSaldosComponent;
  let fixture: ComponentFixture<BalanceSaldosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceSaldosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

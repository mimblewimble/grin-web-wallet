import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletHomeComponent } from './wallet-home.component';

describe('WalletHomeComponent', () => {
  let component: WalletHomeComponent;
  let fixture: ComponentFixture<WalletHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

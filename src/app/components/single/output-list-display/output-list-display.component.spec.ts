import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputListDisplay } from './output-list-display';

describe('OutputListDisplay', () => {
  let component: OutputListDisplay;
  let fixture: ComponentFixture<OutputListDisplay>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputListDisplay ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputListDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

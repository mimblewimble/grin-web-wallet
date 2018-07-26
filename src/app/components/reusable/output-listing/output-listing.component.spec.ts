import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputListingComponent } from './output-listing.component';

describe('OutputListingComponent', () => {
  let component: OutputListingComponent;
  let fixture: ComponentFixture<OutputListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

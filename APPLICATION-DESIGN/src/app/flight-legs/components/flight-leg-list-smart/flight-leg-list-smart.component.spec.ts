import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLegListSmartComponent } from './flight-leg-list-smart.component';

describe('FlightLegListSmartComponent', () => {
  let component: FlightLegListSmartComponent;
  let fixture: ComponentFixture<FlightLegListSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightLegListSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightLegListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

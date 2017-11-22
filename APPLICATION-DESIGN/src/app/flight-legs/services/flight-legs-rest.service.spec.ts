import { TestBed, inject } from '@angular/core/testing';

import { FlightLegsRestService } from './flight-legs-rest.service';

describe('FlightLegsRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightLegsRestService]
    });
  });

  it('should be created', inject([FlightLegsRestService], (service: FlightLegsRestService) => {
    expect(service).toBeTruthy();
  }));
});

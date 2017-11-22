import { TestBed, inject } from '@angular/core/testing';

import { FlightLegsSandboxService } from './flight-legs-sandbox.service';

describe('FlightLegsSandboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightLegsSandboxService]
    });
  });

  it('should be created', inject([FlightLegsSandboxService], (service: FlightLegsSandboxService) => {
    expect(service).toBeTruthy();
  }));
});

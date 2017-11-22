import { TestBed, inject } from '@angular/core/testing';

import { TurnaroundsRestService } from './turnarounds-rest.service';

describe('TurnaroundsRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurnaroundsRestService]
    });
  });

  it('should be created', inject([TurnaroundsRestService], (service: TurnaroundsRestService) => {
    expect(service).toBeTruthy();
  }));
});

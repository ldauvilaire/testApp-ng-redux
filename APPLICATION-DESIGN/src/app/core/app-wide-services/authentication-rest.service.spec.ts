import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationRestService } from './authentication-rest.service';

describe('AuthenticationRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationRestService]
    });
  });

  it('should be created', inject([AuthenticationRestService], (service: AuthenticationRestService) => {
    expect(service).toBeTruthy();
  }));
});

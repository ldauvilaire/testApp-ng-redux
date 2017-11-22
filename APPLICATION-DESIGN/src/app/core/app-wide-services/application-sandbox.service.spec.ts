import { TestBed, inject } from '@angular/core/testing';

import { ApplicationSandboxService } from './application-sandbox.service';

describe('ApplicationSandboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationSandboxService]
    });
  });

  it('should be created', inject([ApplicationSandboxService], (service: ApplicationSandboxService) => {
    expect(service).toBeTruthy();
  }));
});

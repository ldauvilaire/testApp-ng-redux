import { TestBed, inject } from '@angular/core/testing';

import { UsersSandboxService } from './users-sandbox.service';

describe('UsersSandboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersSandboxService]
    });
  });

  it('should be created', inject([UsersSandboxService], (service: UsersSandboxService) => {
    expect(service).toBeTruthy();
  }));
});

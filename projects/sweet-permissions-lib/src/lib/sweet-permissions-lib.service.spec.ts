import { TestBed, inject } from '@angular/core/testing';

import { SweetPermissionsLibService } from './sweet-permissions-lib.service';

describe('SweetPermissionsLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetPermissionsLibService]
    });
  });

  it('should be created', inject([SweetPermissionsLibService], (service: SweetPermissionsLibService) => {
    expect(service).toBeTruthy();
  }));
});

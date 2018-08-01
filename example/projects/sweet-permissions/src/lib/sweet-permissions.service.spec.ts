import { TestBed, inject } from '@angular/core/testing';

import { SweetPermissionsService } from './sweet-permissions.service';

describe('SweetPermissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetPermissionsService]
    });
  });

  it('should be created', inject([SweetPermissionsService], (service: SweetPermissionsService) => {
    expect(service).toBeTruthy();
  }));
});

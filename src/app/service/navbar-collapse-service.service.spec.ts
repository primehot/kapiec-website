import { TestBed } from '@angular/core/testing';

import { NavbarCollapseServiceService } from './navbar-collapse-service.service';

describe('NavbarCollapseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarCollapseServiceService = TestBed.get(NavbarCollapseServiceService);
    expect(service).toBeTruthy();
  });
});

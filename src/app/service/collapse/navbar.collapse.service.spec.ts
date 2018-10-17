import { TestBed } from '@angular/core/testing';

import { NavbarCollapseService } from './navbar.collapse.service';

describe('NavbarCollapseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarCollapseService = TestBed.get(NavbarCollapseService);
    expect(service).toBeTruthy();
  });
});

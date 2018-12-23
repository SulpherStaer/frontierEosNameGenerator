import { TestBed } from '@angular/core/testing';

import { RandomNameSelectorService } from './random-name-selector.service';

describe('RandomNameSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomNameSelectorService = TestBed.get(RandomNameSelectorService);
    expect(service).toBeTruthy();
  });
});

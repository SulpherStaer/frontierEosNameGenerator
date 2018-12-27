import { TestBed } from '@angular/core/testing';

import { TranslateJsonToObjectService } from './translate-json-to-object.service';

describe('TranslateJsonToObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateJsonToObjectService = TestBed.get(TranslateJsonToObjectService);
    expect(service).toBeTruthy();
  });
});

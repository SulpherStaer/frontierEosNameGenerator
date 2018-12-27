import { TestBed } from '@angular/core/testing';

import { GetFileWithHttpRequestService } from './get-file-with-http-request.service';

describe('GetFileWithHttpRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFileWithHttpRequestService = TestBed.get(GetFileWithHttpRequestService);
    expect(service).toBeTruthy();
  });
});

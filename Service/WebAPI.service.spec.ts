import { TestBed, inject } from '@angular/core/testing';

import { WebAPIService } from './WebAPI.service';

describe('WebAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebAPIService]
    });
  });

  it('should be created', inject([WebAPIService], (service: WebAPIService) => {
    expect(service).toBeTruthy();
  }));
});

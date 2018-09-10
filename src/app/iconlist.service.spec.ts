import { TestBed, inject } from '@angular/core/testing';

import { IconlistService } from './iconlist.service';

describe('IconlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconlistService]
    });
  });

  it('should be created', inject([IconlistService], (service: IconlistService) => {
    expect(service).toBeTruthy();
  }));
});

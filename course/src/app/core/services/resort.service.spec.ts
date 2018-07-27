import { TestBed, inject } from '@angular/core/testing';

import { ResortService } from './resort.service';

describe('ResortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResortService]
    });
  });

  it('should be created', inject([ResortService], (service: ResortService) => {
    expect(service).toBeTruthy();
  }));
});

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ResortService } from './resort.service';

describe('ResortService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResortService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ResortService], (service: ResortService) => {
    expect(service).toBeTruthy();
  }));
});

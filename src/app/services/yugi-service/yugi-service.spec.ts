import { TestBed } from '@angular/core/testing';

import { YugiService } from './yugi-service';

describe('YugiService', () => {
  let service: YugiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YugiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

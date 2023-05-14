import { TestBed } from '@angular/core/testing';

import { RecordConverterService } from './record-converter.service';

describe('RecordConverterService', () => {
  let service: RecordConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AddressbookService } from './addressbookservice.service';

describe('AddressbookserviceService', () => {
  let service: AddressbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

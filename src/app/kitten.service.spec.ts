import { TestBed, inject } from '@angular/core/testing';

import { KittenService } from './kitten.service';

describe('KittenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KittenService]
    });
  });

  it('should be created', inject([KittenService], (service: KittenService) => {
    expect(service).toBeTruthy();
  }));
});

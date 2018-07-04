import { TestBed, inject } from '@angular/core/testing';

import { BattlescoreService } from './battlescore.service';

describe('BattlescoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattlescoreService]
    });
  });

  it('should be created', inject([BattlescoreService], (service: BattlescoreService) => {
    expect(service).toBeTruthy();
  }));
});

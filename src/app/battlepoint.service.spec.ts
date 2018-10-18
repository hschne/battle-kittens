import {BattlescoreService} from './battlescore.service';
import {Kitten} from './kitten';

describe('BattlescoreService', () => {

  let service: BattlescoreService;

  beforeEach(() => {
    service = new BattlescoreService();
  });

  it('should return correct battlescore', () => {
    const kitten = new Kitten(1, '', 100, 100, 100);
    expect(service.calculateBattlePoints(kitten)).toBe(10);
  });

  it('should return correct battlescore on null', () => {
    expect(service.calculateBattlePoints(null)).toBe(0);
  });
});

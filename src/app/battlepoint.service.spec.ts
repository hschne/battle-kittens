import {BattlescoreService} from './battlescore.service';
import {Kitten} from './kitten';

describe('BattlescoreService', () => {

  let service: BattlescoreService;

  beforeEach(() => {
    service = new BattlescoreService();
  });

  it('should return correct battlescore', () => {
    const kitten = new Kitten(1, '', 100, 100, 100);

    const result = service.calculateBattlePoints(kitten);

    expect(result).toBe(10);
  });

  it('with null should return correct battlescore', () => {
    const result = service.calculateBattlePoints(null);

    expect(result).toBe(0);
  });
});

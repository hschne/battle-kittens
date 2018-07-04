import {Injectable} from '@angular/core';
import {Kitten} from './kitten';

@Injectable({
  providedIn: 'root'
})
export class BattlescoreService {

  constructor() {
  }

  public calculateBattlePoints(kitten: Kitten): number {
    const sum = kitten.strength * 0.90 + kitten.cuteness * 1.10 + kitten.speed;
    return sum / (3 * 10);
  }
}

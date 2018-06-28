import {Injectable} from '@angular/core';
import {Kitten, KITTENS} from './kitten';

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  constructor() {
  }

  public list(): Kitten[] {
    return KITTENS;
  }

  public get(id: number): Kitten {
    return {id: id, name: 'Somename', cuteness: 15, battlescore: 5.5, strength: 12, speed: 45};
  }
}

import {Injectable} from '@angular/core';
import {Kitten, KITTENS} from './kitten';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  constructor() {
  }

  public list(): Observable<Kitten[]> {
    return of(KITTENS);
  }

  public get(id: number): Observable<Kitten> {
    return of({id: id, name: 'Somename', cuteness: 15, battlescore: 5.5, strength: 12, speed: 45});
  }
}

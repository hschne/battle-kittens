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

  public update(kitten: Kitten): void {
    const item = KITTENS.find(function (obj) {
      return obj.id === kitten.id;
    });
    const index = KITTENS.indexOf(item);
    KITTENS[index] = kitten;
  }

  public get(id: number): Observable<Kitten> {
    return of(KITTENS.find(function (obj) {
      return obj.id === id;
    }));
  }


}

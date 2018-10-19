import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComponent} from './list.component';
import {KittenService} from '../kitten.service';
import {of} from 'rxjs';
import {ListItemComponent} from '../list-item/list-item.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  const kittenServiceStub = {
    list() {
      const kittens = [];
      return of(kittens);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent,
        ListItemComponent],
      imports: [ RouterTestingModule ],
      providers: [{provide: KittenService, useValue: kittenServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

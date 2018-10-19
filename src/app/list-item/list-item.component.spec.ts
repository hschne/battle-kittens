import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListItemComponent} from './list-item.component';
import {KittenService} from '../kitten.service';
import {Kitten} from '../kitten';
import {of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  const kittenServiceStub = {
    get() {
      const todos = new Kitten();
      return of(todos);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemComponent],
      imports: [RouterTestingModule],
      providers: [{provide: KittenService, useValue: kittenServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    component.kitten = new Kitten();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

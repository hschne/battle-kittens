import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailComponent} from './detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Kitten} from '../kitten';
import {KittenService} from '../kitten.service';
import {Observable, of} from 'rxjs';


describe('DetailComponent', () => {
  let component: DetailComponent;

  let fixture: ComponentFixture<DetailComponent>;

  const kittenServiceStub = {
    get() {
      const kitten = new Kitten();
      return of( kitten );
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [{provide: KittenService, useValue: kittenServiceStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

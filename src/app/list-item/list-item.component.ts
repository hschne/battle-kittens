import {Component, Input, OnInit} from '@angular/core';
import {Kitten} from '../kitten';
import {KittenService} from '../kitten.service';
import {BattlescoreService} from '../battlescore.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  kitten: Kitten;


  constructor(private kittenService: KittenService,
              private battlescoreService: BattlescoreService) {
  }

  ngOnInit() {
  }

  view() {
    console.log('Whoopsi!');
  }

  delete() {
    this.kittenService.delete(this.kitten);
  }

}

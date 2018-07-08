import {Component, OnInit, ViewChild} from '@angular/core';
import {Kitten} from '../kitten';
import {KittenService} from '../kitten.service';
import {BattlescoreService} from '../battlescore.service';
import {ListItemComponent} from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  kittens: Kitten[];

  constructor(private kittenService: KittenService) {
  }

  ngOnInit() {
    this.kittenService.list().subscribe(kittens => this.kittens = kittens);
  }

}

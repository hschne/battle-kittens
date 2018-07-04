import {Component, OnInit} from '@angular/core';
import {Kitten} from '../kitten';
import {KittenService} from '../kitten.service';
import {BattlescoreService} from '../battlescore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  kittens: Kitten[];

  constructor(private kittenService: KittenService,
              public battlescoreService: BattlescoreService) {
  }

  ngOnInit() {
    this.kittenService.list().subscribe(kittens => this.kittens = kittens);
  }

}

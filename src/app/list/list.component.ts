import {Component, OnInit} from '@angular/core';
import {Kitten} from '../kitten';
import {KittenService} from '../kitten.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  kittens: Kitten[];

  constructor(private kittenService: KittenService) {
  }

  ngOnInit() {
    this.kittenService.list().subscribe(kittens => this.kittens = kittens);
  }

}

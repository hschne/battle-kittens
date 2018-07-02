import {Component, OnInit} from '@angular/core';
import {Kitten} from './kitten';
import {KittenService} from './kitten.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Battle Kittens';

  kittens: Kitten[];

  constructor(private kittenService: KittenService) {

  }

  ngOnInit() {
    this.kittens = this.kittenService.list();
  }
}

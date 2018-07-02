import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {KittenService} from '../kitten.service';
import {Kitten} from '../kitten';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  kitten: Kitten;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private kittenService: KittenService) {
  }

  ngOnInit() {
    this.getKitten();
  }

  getKitten(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kittenService.get(id).subscribe(kitten => this.kitten = kitten);
  }

  goBack(): void {
    this.location.back();
  }
}

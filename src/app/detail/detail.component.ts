import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {KittenService} from '../kitten.service';
import {Kitten} from '../kitten';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  kitten: Kitten;

  kittenForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private kittenService: KittenService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getKitten();
    this.kittenForm = this.formBuilder.group({
      name: [this.kitten.name, Validators.required],
      speed: [this.kitten.speed, [Validators.max(100), Validators.min(0)]],
      strength: this.kitten.strength,
      cuteness: this.kitten.cuteness
    });
  }

  get name() {
    return this.kittenForm.get('name');
  }


  onSubmit() {
    this.kittenService.update(this.kitten);
  }

  getKitten(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kittenService.get(id).subscribe(kitten => this.kitten = kitten);
  }

  goBack(): void {
    this.location.back();
  }
}

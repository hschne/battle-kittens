import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class DetailComponent implements OnInit, OnChanges {

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
      name: ['', Validators.required],
      speed: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      strength: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      cuteness: ['', [Validators.required, Validators.max(100), Validators.min(0)]]
    });
    this.rebuildForm();

    this.kittenForm.valueChanges
      .subscribe(val => {
        if (this.kittenForm.valid) {
          this.kitten.battlescore = val.speed + val.strength + val.cuteness;
          console.log('TEST');
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rebuildForm();
  }

  get kittenName() {
    return this.kittenForm.get('name');
  }

  get speed() {
    return this.kittenForm.get('speed');
  }

  get strength() {
    return this.kittenForm.get('strength');
  }

  get cuteness() {
    return this.kittenForm.get('cuteness');
  }

  onSubmit() {
    this.kittenService.update(this.prepareSaveKitten());
  }

  getKitten(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kittenService.get(id).subscribe(kitten => this.kitten = kitten);
  }

  goBack(): void {
    this.location.back();
  }

  private prepareSaveKitten(): Kitten {
    const formModel = this.kittenForm.value;

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    return {
      id: this.kitten.id,
      name: formModel.name as string,
      speed: formModel.speed as number,
      strength: formModel.strength as number,
      cuteness: formModel.cuteness as number,
      battlescore: this.kitten.battlescore
    };
  }

  private rebuildForm() {
    this.kittenForm.reset({
      name: this.kitten.name,
      speed: this.kitten.speed,
      strength: this.kitten.strength,
      cuteness: this.kitten.cuteness,
    });
  }

  onChanges(): void {

  }
}

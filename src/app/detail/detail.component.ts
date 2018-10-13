import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {KittenService} from '../kitten.service';
import {Kitten} from '../kitten';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BattlescoreService} from '../battlescore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnChanges {

  kitten: Kitten;

  kittenForm: FormGroup;

  battlescore: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private kittenService: KittenService,
              private battlescoreService: BattlescoreService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.setupModel();
    this.setupForm();
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
    this.kittenService.update(this.formToKitten());
    this.router.navigate(['/kittens']);
  }

  goBack(): void {
    this.location.back();
  }

  private setupModel(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kittenService.get(id).subscribe(kitten => this.kitten = kitten);
    this.battlescore = this.battlescoreService.calculateBattlePoints(this.kitten);
  }

  private setupForm() {
    this.kittenForm = this.formBuilder.group({
      name: ['', Validators.required],
      speed: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      strength: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      cuteness: ['', [Validators.required, Validators.max(100), Validators.min(0)]]
    });
    this.rebuildForm();
    this.kittenForm.valueChanges
      .subscribe(() => {
        if (this.kittenForm.valid) {
          this.battlescore = this.battlescoreService.calculateBattlePoints(this.formToKitten());
        }
      });
  }

  private formToKitten(): Kitten {
    const formModel = this.kittenForm.value;
    return {
      id: this.kitten.id,
      name: formModel.name as string,
      speed: formModel.speed as number,
      strength: formModel.strength as number,
      cuteness: formModel.cuteness as number,
      avatar: this.kitten.avatar
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

}

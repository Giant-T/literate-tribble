import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Leader } from 'src/app/models/leader';

@Component({
  selector: 'app-leaders-form',
  templateUrl: './leaders-form.component.html',
  styleUrls: ['./leaders-form.component.css'],
})
export class LeadersFormComponent {
  @Input() leader: Leader = {
    name: '',
    sex: '',
    dateStart: new Date(),
    politicalParty: '',
  };
  @Input() title: string = '';

  @Output() onSubmit: EventEmitter<Leader> = new EventEmitter();

  leaderFormGroup = this.formBuilder.group({
    name: new FormControl(this.leader.name, Validators.required),
    sex: new FormControl(this.leader.sex, Validators.required),
    dateStart: new FormControl<Date>(
      this.leader.dateStart,
      Validators.required
    ),
    dateEnd: new FormControl<Date | undefined>(
      this.leader.dateEnd,
      Validators.nullValidator
    ),
    politicalParty: new FormControl(
      this.leader.politicalParty,
      Validators.required
    ),
  });

  constructor(private formBuilder: FormBuilder) {}

  submit(): void {
    if (!this.leaderFormGroup.valid) return;

    const leader: Leader = {
      name: this.leaderFormGroup.controls.name.value!,
      countryId: this.leader.countryId,
      sex: this.leaderFormGroup.controls.sex.value!,
      dateStart: this.leaderFormGroup.controls.dateStart.value!,
      dateEnd: this.leader.dateEnd,
      politicalParty: this.leaderFormGroup.controls.politicalParty.value!,
    };

    this.onSubmit.emit(leader);
  }
}

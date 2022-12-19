import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  submit(): void {
    this.onSubmit.emit(this.leader);
  }
}

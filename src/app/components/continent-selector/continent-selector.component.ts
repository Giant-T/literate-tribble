import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Continent } from 'src/app/models/continent';

@Component({
  selector: 'app-continent-selector',
  templateUrl: './continent-selector.component.html',
  styleUrls: ['./continent-selector.component.css'],
})
export class ContinentSelectorComponent {
  @Input() continent?: Continent;
  @Input() required: boolean = false;

  @Output() continentChange: EventEmitter<Continent> = new EventEmitter();
  @Output() onChange: EventEmitter<void> = new EventEmitter();

  getContinents(): string[] {
    return Object.values(Continent);
  }

  updateContinent(): void {
    this.continentChange.emit(this.continent);
    this.onChange.emit();
  }
}

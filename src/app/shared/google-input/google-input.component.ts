import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-google-input',
  templateUrl: './google-input.component.html',
  styleUrls: ['./google-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleInputComponent {
  @Input() public value: string;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public name: string;
  @Input() public type: string;
  @Input() public required: string;
  @Output() public valueChanged: EventEmitter<string> = new EventEmitter<string>();

  public onValueChanged(value) {
    this.valueChanged.emit(value);
  }
}

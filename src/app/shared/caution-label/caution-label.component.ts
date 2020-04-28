import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caution-label',
  templateUrl: './caution-label.component.html',
  styleUrls: ['./caution-label.component.scss']
})
export class CautionLabelComponent {
  @Input() public text: string;
}

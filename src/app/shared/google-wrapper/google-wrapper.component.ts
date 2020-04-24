import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-google-wrapper',
  templateUrl: './google-wrapper.component.html',
  styleUrls: ['./google-wrapper.component.scss']
})
export class GoogleWrapperComponent {
  @Input() public hasInnerFieldValue: boolean;
  @Input() public label: string;
  @Input() public placeholder: string;

  public isContainerSelected = false;

  public onContainerFocusIn(): void {
    this.isContainerSelected = true;
  }

  public onContainerFocusOut(): void {
    this.isContainerSelected = false;
  }

  public get isElementActive(): boolean {
    return this.hasInnerFieldValue || this.isContainerSelected;
  }

  public get labelContent(): string {
    return this.hasInnerFieldValue || this.isContainerSelected || !this.placeholder
      ? this.label
      : this.placeholder;
  }
}

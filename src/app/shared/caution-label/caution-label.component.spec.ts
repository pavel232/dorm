import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionLabelComponent } from './caution-label.component';

describe('CautionLabelComponent', () => {
  let component: CautionLabelComponent;
  let fixture: ComponentFixture<CautionLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CautionLabelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CautionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

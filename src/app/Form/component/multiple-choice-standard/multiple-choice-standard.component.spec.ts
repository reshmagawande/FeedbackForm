import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceStandardComponent } from './multiple-choice-standard.component';

describe('MultipleChoiceStandardComponent', () => {
  let component: MultipleChoiceStandardComponent;
  let fixture: ComponentFixture<MultipleChoiceStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChoiceStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleChoiceStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

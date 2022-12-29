import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceMultipleResponseComponent } from './multiple-choice-multiple-response.component';

describe('MultipleChoiceMultipleResponseComponent', () => {
  let component: MultipleChoiceMultipleResponseComponent;
  let fixture: ComponentFixture<MultipleChoiceMultipleResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChoiceMultipleResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleChoiceMultipleResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

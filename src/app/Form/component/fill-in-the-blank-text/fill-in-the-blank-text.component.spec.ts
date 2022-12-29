import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInTheBlankTextComponent } from './fill-in-the-blank-text.component';

describe('FillInTheBlankTextComponent', () => {
  let component: FillInTheBlankTextComponent;
  let fixture: ComponentFixture<FillInTheBlankTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillInTheBlankTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillInTheBlankTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

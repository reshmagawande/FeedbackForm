import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInTheBlankDropdownComponent } from './fill-in-the-blank-dropdown.component';

describe('FillInTheBlankDropdownComponent', () => {
  let component: FillInTheBlankDropdownComponent;
  let fixture: ComponentFixture<FillInTheBlankDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillInTheBlankDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillInTheBlankDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

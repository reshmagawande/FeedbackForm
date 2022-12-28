import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { questionType } from '../../model/question-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  homeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.homeForm = this.fb.group({

      questionTypeCtrl: [''],

    });
  }
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  states: string[] = ['Europe','Asia','Austellia','Austia']
  questionTypeList = questionType;

  add() {
    this.homeForm.value; 
     console.log(this.homeForm.value)
    }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { questionType } from '../../model/question-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeForm!: FormGroup;
  formValueObj: any;
  questionIndex: number = 0;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.homeForm = this.fb.group({
      questionTypeCtrl: [''],
    });
  }
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  states: string[] = ['Europe', 'Asia', 'Austellia', 'Austia'];

  questionTypeList = questionType;

  add() {
    this.formValueObj = this.homeForm.value;
    console.log(this.formValueObj.questionTypeCtrl.id);
    this.questionIndex = this.formValueObj.questionTypeCtrl.id;
    //  if (obj.questionTypeCtrl.id == 1) {
    //   this.router.navigateByUrl('/multipleChoiceStandard');
    //  }
    //  else if (obj.questionTypeCtrl.id == 2) {
    //   this.router.navigateByUrl('/multipleChoiceMultipleResponse');
    //  }
    //   else if (obj.questionTypeCtrl.id == 3) {
    //   this.router.navigateByUrl('/fillInTheBlanksText');
    //  }
    //  else if (obj.questionTypeCtrl.id == 4) {
    //   this.router.navigateByUrl('/fillInTheBlanksDropdown');
    //  }
  }

  //todo
  preview() {
    this.router.navigate(['/previewForm']);
  }
}

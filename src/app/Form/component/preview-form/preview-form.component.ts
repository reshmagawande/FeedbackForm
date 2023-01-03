import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { PreviewFormModel } from '../../model/previewForm';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.css'],
})
export class PreviewFormComponent {
  previewForm!: FormGroup;
  dataList: any = [];
  optionList: any = [];
  previewFormObj = PreviewFormModel;
  selectedValue: string;

  multipleResponseList: any = [];
  list: any = [];
  answer: string;
  preview: boolean = false;
  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let questionData = this.localStorageService.getData('Question');
    if (questionData) {
      this.preview = true;
    }

    this.previewForm = this.fb.group({
      questionAnswer: this.fb.array([]),
      ans: new FormControl('')
    });

    this.dataList = this.localStorageService.getData('Question');

    this.dataList.forEach((e) => {
      let frmControl: FormGroup = this.fb.group({
        questionId: [e.id],
        question: [e.question],
        answer: this.fb.group({
          answer: [],
        }),
      });
      (<FormArray>this.previewForm.get('questionAnswer')).push(frmControl);
    });

    this.dataList.forEach((ele: any, index: any) => {});

    of(this.getOrders()).subscribe(() => {});
  }

  getOrders() {
    this.dataList.forEach((element: { option: any }) => {
      return (this.optionList = element.option);
    });
  }

  selectAnswer(i, index, sublist, mainList) {
    mainList.selectedAnswer[index] = sublist;
  }

  multiSelectAnswer(index, answer, event: Event, list) {
    list.selectedAnswer[index] = answer;
  }

  onChangeFillInTheBlanks(val, index, list) {
    console.log('val',val)
    this.fillInTheBlanksAnswer(val, index, list);
  }

  fillInTheBlanksAnswer(val, index, list) {
    console.log('val',val)
    list.selectedAnswer[index] = val;
    console.log('list.answer[index]',list.selectedAnswer[index])
  }

  onSubmit() {
    console.log('submit', this.dataList);
    this.previewFormObj = this.dataList;

    this.localStorageService.setData(
      'questionAndAnswer',
      JSON.stringify(this.previewFormObj)
    );

    this.router.navigate(['/response-screen']);
  }
}

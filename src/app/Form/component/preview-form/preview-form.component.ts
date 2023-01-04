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

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.previewForm = this.fb.group({
      questionAnswer: this.fb.array([]),
      ans: new FormControl(''),
    });

    this.dataList = this.localStorageService.getData('Question');

    this.dataList.forEach((element) => {
      let questionIscorrect: boolean[] = [];
      if (element.questionTypeId === 3) {
        var queArray = element.question.split(' ');

        queArray.forEach((ele) => {
          let k = 0;
          if (ele.includes('{{')) {
            questionIscorrect.push(false);
          } else {
            questionIscorrect.push(true);
          }
          k++;
        });
      }
      element.quesArray = queArray;
      element.questionIscorrect = questionIscorrect;
    });

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
    mainList.selectedAnswer = [];
    mainList.selectedAnswer[index] = sublist;
  }

  multiSelectAnswer(index, answer, event, list) {
    const ischecked = (<HTMLInputElement>event.target).checked;
    if (ischecked) {
      list.selectedAnswer[index] = answer;
    } else {
      list.selectedAnswer = list.selectedAnswer.filter(
        (e: any) => e !== answer
      );
    }
  }

  onChangeFillInTheBlanks(val, index, list) {
    this.fillInTheBlanksAnswer(val, index, list);
  }

  fillInTheBlanksAnswer(val, index, list) {
    list.selectedAnswer[index] = val;
  }

  onSubmit() {
    this.previewFormObj = this.dataList;

    this.localStorageService.setData(
      'questionAndAnswer',
      JSON.stringify(this.previewFormObj)
    );

    this.router.navigate(['/response-screen']);
  }
}

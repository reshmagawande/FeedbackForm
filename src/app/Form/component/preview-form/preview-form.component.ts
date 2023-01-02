import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.previewForm = this.fb.group({
      questionAnswer: this.fb.array([]),
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

  selectAnswer(index, answer) {
    (<FormArray>this.previewForm.get('questionAnswer'))
      .get(String(index))
      .get('answer')
      .setValue({
        answer: answer,
      });
  }

  onSubmit() {
    console.log(this.previewForm.value);
    this.previewFormObj = this.previewForm.value;

    this.localStorageService.setData(
      'questionAndAnswer',
      JSON.stringify(this.previewFormObj)
    );

    this.router.navigate(['/response-screen']);
  }
}

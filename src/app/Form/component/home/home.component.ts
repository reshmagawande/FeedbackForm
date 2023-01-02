import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { questionType } from '../../model/question-type';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  homeForm!: FormGroup;
  formValueObj: any;
  questionIndex: number = 0;

  constructor(private fb: FormBuilder,
    private router:Router,
    private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
    this.homeForm = this.fb.group({

      questionTypeCtrl: [''],

    });
  }
  
  questionTypeList = questionType;

  add() {
   this.formValueObj = this.homeForm.value; 
     console.log(this.formValueObj.questionTypeCtrl.id)
    this.questionIndex = this.formValueObj.questionTypeCtrl.id;
    }
    
    preview() {
      this.router.navigate(['/previewForm']);
    }
}

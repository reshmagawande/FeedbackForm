import { Component, OnInit } from '@angular/core';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Subject } from 'rxjs';
import { ComponentCommunicationService } from '../../services/component-communication.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { TableComponent } from '../table/table.component';
// import {  } from 'ngx-bootstrap-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiple-choice-standard',
  templateUrl: './multiple-choice-standard.component.html',
  styleUrls: ['./multiple-choice-standard.component.css'],
})
export class MultipleChoiceStandardComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private componentCommunicationService: ComponentCommunicationService,
    private router: Router
  ) {}


  multipleChoiceStandardQuestion = '';
  showOptionEditor: boolean = false;
  multipleChoiceStandardOption: any = [];
  showTable: boolean = false;
  newQuestionList: any = [];
  qlist: any = [];
  Array: any = [];
  newArray: any = [];
  multipleChoiceStdQuestionData: any = [];
  questionvalue: string = '';
  key: string = 'multipleChoiceStandardQuestion';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '7rem',
    minHeight: '5rem',
    placeholder: 'Enter question here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'underline',
        'subscript',
        'superscript',
        'link',
        'unlink',
        'insertVideo',
        'insertHorizontalRule',
        'clearFormatting',
        'customClasses',
        'fontSize',
      ],
    ],
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  option: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '7rem',
    minHeight: '5rem',
    placeholder: 'Enter options here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'underline',
        'subscript',
        'superscript',
        'link',
        'unlink',
        'insertVideo',
        'insertHorizontalRule',
        'clearFormatting',
        'customClasses',
        'fontSize',
      ],
    ],
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  ngOnInit(): void {

    let multipleChoiceStandardQuestionData = this.localStorageService.getData('Question');
    if(multipleChoiceStandardQuestionData){
      this.showTable = true;
    }
    // console.log(this.questionvalue);
  }

  onAddoption() {
    this.showOptionEditor = true;
    this.multipleChoiceStandardQuestion;
  }
  
  onSubmit() {
    this.showTable = true;

    this.newArray = localStorage.getItem('Question');
    if (this.newArray == null) {
      
      this.multipleChoiceStandardOption =
        this.multipleChoiceStandardOption.replace(/<p>/gm, ',');
      this.multipleChoiceStandardOption =
        this.multipleChoiceStandardOption.replace(/<[^>]+>/gm, '');
          let option = this.multipleChoiceStandardOption.split(",");
      this.qlist = {
        id: 1,
        questionType: 'Multiple Choice - Standard',
        question: this.multipleChoiceStandardQuestion.replace(/<[^>]+>/g, ''),
        option: option,
      };
      this.Array.push(this.qlist); 
      this.localStorageService.set('Question', this.Array);
         this.showOptionEditor = false;
    this.multipleChoiceStandardOption = '';
    this.multipleChoiceStandardQuestion = '';
    }
    else
    {
     
      this.Array = JSON.parse(this.newArray);
      this.multipleChoiceStandardOption = this.multipleChoiceStandardOption.replace(/<p>/gm, ',');
      this.multipleChoiceStandardOption = this.multipleChoiceStandardOption.replace(/<[^>]+>/gm, '');
         let option = this.multipleChoiceStandardOption.split(",");
      this.qlist = {
        id: 1,
        questionType: 'Multiple Choice - Standard',
        question: this.multipleChoiceStandardQuestion.replace(/<[^>]+>/g, ''),
        option: option,
      };
  
      this.Array.push(this.qlist);
      this.localStorageService.set('Question', this.Array);
      this.showOptionEditor = false;
      this.multipleChoiceStandardOption = '';
      this.multipleChoiceStandardQuestion = '';
    }
    
  }
}

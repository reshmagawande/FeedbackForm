import { Component, OnInit, QueryList } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Subject } from 'rxjs';
import { ComponentCommunicationService } from '../../services/component-communication.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-multiple-choice-multiple-response',
  templateUrl: './multiple-choice-multiple-response.component.html',
  styleUrls: ['./multiple-choice-multiple-response.component.css'],
})
export class MultipleChoiceMultipleResponseComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private componentCommunicationService: ComponentCommunicationService
  ) {}

  ngOnInit(): void {}
  multipleChoiceMultiResponseQuestion = '';
  showOptionEditor: boolean = false;
  multipleChoiceMultiResponseOption: string = '';
  showTable: boolean = false;
  newQuestionList: any = [];
  uniqueIndex: number = 1;

  qlist: any = [];
  newArray: any = [];
  Array: any = [];
  question: AngularEditorConfig = {
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

  onAddoption() {
    this.showOptionEditor = true;
    this.multipleChoiceMultiResponseQuestion;
  }

  // onSubmit() {
  //   this.showTable=true;
  //   let newArray: any;

  //   this.multipleChoiceMultiResponseOption = this.multipleChoiceMultiResponseOption.replace(/<p>/gm, ',')
  //   this.multipleChoiceMultiResponseOption = this.multipleChoiceMultiResponseOption.replace(/<[^>]+>/gm, '')
  //   this.multipleChoiceMultiResponseOption = JSON.stringify(this.multipleChoiceMultiResponseOption)
  //   let option = JSON.parse("[" + this.multipleChoiceMultiResponseOption + "]");

  //   newArray =
  //     {
  //       id: 2,
  //       questionType: 'Multiple Choice - Multiple Response',
  //       question: this.multipleChoiceMultiResponseQuestion.replace(/<[^>]+>/g, ''),
  //       option: option
  //     }
  //   this.newQuestionList.push(newArray)
  //   this.localStorageService.setData('Question', JSON.stringify(this.newQuestionList));
  //   // let multipleChoiceMultiResponseQuestionData = this.localStorageService.getData('Question');

  //   // this.componentCommunicationService.emitData(multipleChoiceMultiResponseQuestionData)
  //   this.showOptionEditor = false;
  //   this.multipleChoiceMultiResponseOption = '';
  //   this.multipleChoiceMultiResponseQuestion = '';

  // }
  onSubmit() {
    this.showTable = true;

    this.newArray = localStorage.getItem('Question');
    if (this.newArray == null) {
      this.multipleChoiceMultiResponseOption =
        this.multipleChoiceMultiResponseOption.replace(/<p>/gm, ',');
      this.multipleChoiceMultiResponseOption =
        this.multipleChoiceMultiResponseOption.replace(/<[^>]+>/gm, '');
      let option = this.multipleChoiceMultiResponseOption.split(',');
      this.qlist = {
        uniqueIndex: this.uniqueIndex++,
        questionTypeId: 2,
        selectedAnswer: [],
        questionType: 'Multiple Choice - Multiple Response',
        question: this.multipleChoiceMultiResponseQuestion.replace(
          /<[^>]+>/g,
          ''
        ),
        option: option,
      };
      this.Array.push(this.qlist);
      this.localStorageService.set('Question', this.Array);
      this.showOptionEditor = false;
      this.multipleChoiceMultiResponseOption = '';
      this.multipleChoiceMultiResponseQuestion = '';
    } else {
      this.Array = JSON.parse(this.newArray);
      this.multipleChoiceMultiResponseOption =
        this.multipleChoiceMultiResponseOption.replace(/<p>/gm, ',');
      this.multipleChoiceMultiResponseOption =
        this.multipleChoiceMultiResponseOption.replace(/<[^>]+>/gm, '');
      let option = this.multipleChoiceMultiResponseOption.split(',');
      this.qlist = {
        uniqueIndex: this.uniqueIndex++,
        selectedAnswer: [],
        questionTypeId: 2,
        questionType: 'Multiple Choice - Multiple Response',
        question: this.multipleChoiceMultiResponseQuestion.replace(
          /<[^>]+>/g,
          ''
        ),
        option: option,
      };

      this.Array.push(this.qlist);
      this.localStorageService.set('Question', this.Array);
      this.showOptionEditor = false;
      this.multipleChoiceMultiResponseOption = '';
      this.multipleChoiceMultiResponseQuestion = '';
    }
  }
}

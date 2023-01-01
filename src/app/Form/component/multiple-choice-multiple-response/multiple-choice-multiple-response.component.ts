import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
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
    console.log(this.multipleChoiceMultiResponseQuestion);
    // localStorage.setItem(
    //   'multipleChoiceMultiResponseQuestion',
    //   this.multipleChoiceMultiResponseQuestion
    // );
  }
  // onConfirmQuestion() {
  //   this.multipleChoiceMultiResponseQuestion;
  //   localStorage.setItem(
  //     'multipleChoiceMultiResponseQuestion',
  //     this.multipleChoiceMultiResponseQuestion
  //   );
  //   localStorage.setItem(
  //     'multipleChoiceMultiResponseOption',
  //     this.multipleChoiceMultiResponseOption
  //   );
  // }

  onSubmit() {
    this.showTable = true;

    let newArray: any;
    this.multipleChoiceMultiResponseOption =
      this.multipleChoiceMultiResponseOption.replace(/<p>/gm, ',');
    this.multipleChoiceMultiResponseOption =
      this.multipleChoiceMultiResponseOption.replace(/<[^>]+>/gm, '');
    let option = JSON.parse('[' + this.multipleChoiceMultiResponseOption + ']');

    newArray = {
      id: 2,
      questionType: 'Multiple Choice - Multiple Response',
      question: this.multipleChoiceMultiResponseQuestion.replace(
        /<[^>]+>/g,
        ''
      ),
      option: option,
    };

    this.newQuestionList.push(newArray);
    this.localStorageService.setData(
      'multipleChoiceMultiResponseQuestion',
      JSON.stringify(this.newQuestionList)
    );
    let multipleChoiceMultiResponseQuestionData =
      this.localStorageService.getData('multipleChoiceMultiResponseQuestion');

    this.componentCommunicationService.emitData(
      multipleChoiceMultiResponseQuestionData
    );
    this.showOptionEditor = false;
    this.multipleChoiceMultiResponseOption = '';
    this.multipleChoiceMultiResponseQuestion = '';
  }
}

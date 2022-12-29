import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-multiple-choice-multiple-response',
  templateUrl: './multiple-choice-multiple-response.component.html',
  styleUrls: ['./multiple-choice-multiple-response.component.css'],
})
export class MultipleChoiceMultipleResponseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  multipleChoiceMultiResponseQuestion = '';
  showOptionEditor: boolean = false;
  multipleChoiceMultiResponseOption: string = '';

  question: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '7rem',
    minHeight: '5rem',
    placeholder: 'Enter question here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['undo',
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
    'fontSize']],
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
    toolbarHiddenButtons: [['undo',
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
    'fontSize']],
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
  onConfirmQuestion() {
    this.multipleChoiceMultiResponseQuestion;
    localStorage.setItem(
      'multipleChoiceMultiResponseQuestion',
      this.multipleChoiceMultiResponseQuestion
    );
    localStorage.setItem(
      'multipleChoiceMultiResponseOption',
      this.multipleChoiceMultiResponseOption
    );
  }
}

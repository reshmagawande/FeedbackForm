import { Component, OnInit } from '@angular/core';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-multiple-choice-standard',
  templateUrl: './multiple-choice-standard.component.html',
  styleUrls: ['./multiple-choice-standard.component.css']
})
export class MultipleChoiceStandardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  htmlContent = '';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
       fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}

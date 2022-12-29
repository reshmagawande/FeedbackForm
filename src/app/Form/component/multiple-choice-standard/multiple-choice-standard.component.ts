import { Component, OnInit } from '@angular/core';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ComponentCommunicationService } from '../../services/component-communication.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-multiple-choice-standard',
  templateUrl: './multiple-choice-standard.component.html',
  styleUrls: ['./multiple-choice-standard.component.css'],
})
export class MultipleChoiceStandardComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService,
    private componentCommunicationService: ComponentCommunicationService) {}

  ngOnInit(): void {}
  multipleChoiceStandardQuestion = '';
  showOptionEditor: boolean = false;
  multipleChoiceStandardOption: string = '';
  showTable: boolean = false;
  newQuestionList: any = [];

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
        'fontSize'
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
        'fontSize'
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
    this.multipleChoiceStandardQuestion;
 
  }
  onSubmit() {
    this.showTable=true;
    let newArray: any;
   
    this.multipleChoiceStandardOption = this.multipleChoiceStandardOption.replace(/<p>/gm, ',')
    this.multipleChoiceStandardOption = this.multipleChoiceStandardOption.replace(/<[^>]+>/gm, '')
   
    let option = JSON.parse("[" + this.multipleChoiceStandardOption + "]");

    newArray = 
      {
        id: 1,
        questionType: 'Multiple Choice - Standard',
        question: this.multipleChoiceStandardQuestion.replace(/<[^>]+>/g, ''),
        option: option
      }
    this.newQuestionList.push(newArray)
    console.log('newQuestionList>>>',this.newQuestionList)
    this.localStorageService.setData('multipleChoiceStandardQuestion', JSON.stringify(this.newQuestionList));

    let multipleChoiceStandardQuestionData = this.localStorageService.getData('multipleChoiceStandardQuestion');
    console.log("multipleChoiceStandardQuestionData >>>", multipleChoiceStandardQuestionData)

    this.componentCommunicationService.emitData(multipleChoiceStandardQuestionData)
  }
}

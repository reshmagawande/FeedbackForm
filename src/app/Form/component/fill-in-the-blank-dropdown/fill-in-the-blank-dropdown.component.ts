import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-fill-in-the-blank-dropdown',
  templateUrl: './fill-in-the-blank-dropdown.component.html',
  styleUrls: ['./fill-in-the-blank-dropdown.component.css'],
})
export class FillInTheBlankDropdownComponent implements OnInit {
  uniqueIndex: number = 1;
  constructor(private localStorageService: LocalStorageService) {}

  fillInTheBlankDropdownQuestion: string = '';
  showTable: boolean = false;
  showOptionEditor: boolean = false;
  fillInTheBlankDropdownOption: string = '';
  newQuestionList: any = [];
  fillInTheBlankQueData: any = [];
  qlist: any = [];
  newArray: any = [];
  Array: any = [];
  question: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '7rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
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
    placeholder: 'Enter text here...',
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
    let questionData = this.localStorageService.getData('Question');
    if (questionData) {
      this.showTable = true;
    }
  }

  onAddoption() {
    this.showOptionEditor = true;
  }

  onSubmit() {
    this.showTable = true;

    this.newArray = localStorage.getItem('Question');
    if (this.newArray == null) {
      this.fillInTheBlankDropdownOption =
        this.fillInTheBlankDropdownOption.replace(/<p>/gm, ',');
      this.fillInTheBlankDropdownOption =
        this.fillInTheBlankDropdownOption.replace(/<[^>]+>/gm, '');
      let option = this.fillInTheBlankDropdownOption.split(',');
      this.qlist = {
        uniqueIndex: this.uniqueIndex++,
        questionTypeId: 4,
        questionType: 'Fill-in-the-blank-dropdown',
        question: this.fillInTheBlankDropdownQuestion.replace(/<[^>]+>/g, ''),
        option: option,
        selectedAnswer: [],
      };
      this.Array.push(this.qlist);
      this.localStorageService.set('Question', this.Array);
      this.showOptionEditor = false;
      this.fillInTheBlankDropdownOption = '';
      this.fillInTheBlankDropdownQuestion = '';
    } else {
      this.Array = JSON.parse(this.newArray);
      this.fillInTheBlankDropdownOption =
        this.fillInTheBlankDropdownOption.replace(/<p>/gm, ',');
      this.fillInTheBlankDropdownOption =
        this.fillInTheBlankDropdownOption.replace(/<[^>]+>/gm, '');
      let option = this.fillInTheBlankDropdownOption.split(',');
      this.qlist = {
        uniqueIndex: this.uniqueIndex++,
        questionTypeId: 4,
        questionType: 'Fill-in-the-blank-dropdown',
        question: this.fillInTheBlankDropdownQuestion.replace(/<[^>]+>/g, ''),
        option: option,
        selectedAnswer: [],
      };

      this.Array.push(this.qlist);
      this.localStorageService.set('Question', this.Array);

      //   let data = this.localStorageService.getData('Question');
      // this.componentCommunicationService.emitData(data)
      this.showOptionEditor = false;
      this.fillInTheBlankDropdownOption = '';
      this.fillInTheBlankDropdownQuestion = '';
    }
  }
}

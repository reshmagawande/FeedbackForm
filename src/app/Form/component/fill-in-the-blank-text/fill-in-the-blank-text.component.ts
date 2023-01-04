import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DynamicGrid } from '../../model/DynamicGrid';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-fill-in-the-blank-text',
  templateUrl: './fill-in-the-blank-text.component.html',
  styleUrls: ['./fill-in-the-blank-text.component.css'],
})
export class FillInTheBlankTextComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  uniqueIndex: number = 1;
  fillInTheBlankTextQuestion: string = '';
  answer: string = '';
  qlist: any = [];
  newArray: any = [];
  Array: any = [];
  answers: string[] = [];
  newQuestionList: any = [];
  blanks: any = [];
  showTable: boolean = false;
  fillInTheBlankTextQueData: any = [];
  ans: string = '{{Answer}}';
  cursorPosition: number;
  answerIndex: number = 0;
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

  ngOnInit(): void {
    let questionData = this.localStorageService.getData('Question');
    if (questionData) {
      this.showTable = true;
    }
  }

  addAnswer() {
    this.answerIndex = this.answerIndex + 1;
    let selection = window.getSelection().getRangeAt(0);
    let parentNode = document.createElement('a'); //create a custom node to insert
    selection.insertNode(parentNode);
    let ans = 'Answer' + this.answerIndex;
    parentNode.insertAdjacentHTML('beforebegin', '{{' + ans + '}}');
    this.blanks.push(this.answerIndex);
  }

  onSubmit() {
    this.showTable = true;

    this.newArray = localStorage.getItem('Question');
    if (this.newArray == null) {
      this.qlist = {
        uniqueIndex: this.uniqueIndex++,
        questionTypeId: 3,
        questionType: 'Fill-in-the-blank-text',
        question: this.fillInTheBlankTextQuestion.replace(/<[^>]+>/g, ''),
        option: [''],
        selectedAnswer: [],
        blanks: this.blanks,
      };
      this.Array.push(this.qlist);
      this.localStorageService.set('Question', this.Array);
      this.fillInTheBlankTextQuestion = '';
    } else {
      this.Array = JSON.parse(this.newArray);
      this.qlist = {
        uniqueIndex: this.uniqueIndex++,
        questionTypeId: 3,
        questionType: 'Fill-in-the-blank-text',
        question: this.fillInTheBlankTextQuestion.replace(/<[^>]+>/g, ''),
        option: [''],
        selectedAnswer: [],
        blanks: this.blanks,
      };
      this.answerIndex = 0;
      this.Array.push(this.qlist);
      this.localStorageService.set('Question', this.Array);

      this.fillInTheBlankTextQuestion = '';
    }
  }

  ngOnDestroy() {
    this.answerIndex = 0;
  }
}

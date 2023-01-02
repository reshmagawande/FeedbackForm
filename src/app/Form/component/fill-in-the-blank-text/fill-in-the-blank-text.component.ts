import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DynamicGrid } from '../../model/DynamicGrid';
import { ComponentCommunicationService } from '../../services/component-communication.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-fill-in-the-blank-text',
  templateUrl: './fill-in-the-blank-text.component.html',
  styleUrls: ['./fill-in-the-blank-text.component.css'],
})
export class FillInTheBlankTextComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService,
    private componentCommunicationService: ComponentCommunicationService
    ) {}

dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
 
  fillInTheBlankTextQuestion: string = '';
  answer: string = '';
  qlist:any = [];
newArray : any =[];
Array : any =[];
  answers: string[] = [];
   newQuestionList: any = [];
  showTable: boolean = false;
  fillInTheBlankTextQueData: any = [];
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
  ngOnInit(): void {
  
  }

 

  onSubmit() {
    
    this.showTable = true;
  
    this.newArray = localStorage.getItem('Question');
    if (this.newArray == null) {
                  
      this.qlist = {
        id: 3,
        questionType: 'Fill-in-the-blank-text',
        question: this.fillInTheBlankTextQuestion.replace(/<[^>]+>/g, ''),
        option: 'Answer',
      };
      this.Array.push(this.qlist); 
      this.localStorageService.set('Question', this.Array);
      this.fillInTheBlankTextQuestion = '';
    }
    else
    {
     
      this.Array = JSON.parse(this.newArray);
      this.qlist = {
            id: 3,
        questionType: 'Fill-in-the-blank-text',
        question: this.fillInTheBlankTextQuestion.replace(/<[^>]+>/g, ''),
        option: 'Answer',
      };
  
      this.Array.push(this.qlist);
      this.localStorageService.set('Question', this.Array);
     
      this.fillInTheBlankTextQuestion = '';
    }
    
  }




}

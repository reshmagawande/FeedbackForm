import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
// import { DynamicGrid } from './DynamicGrid';

@Component({
  selector: 'app-fill-in-the-blank-text',
  templateUrl: './fill-in-the-blank-text.component.html',
  styleUrls: ['./fill-in-the-blank-text.component.css'],
})
export class FillInTheBlankTextComponent implements OnInit {
  constructor() {}

  // dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  ngOnInit(): void {
    this.newDynamic = { name: '', email: '', phone: '' };
    // this.dynamicArray.push(this.newDynamic);
  }
  fillInTheBlankTextQuestion: string = '';
  answer: string = '';
  answers: string[] = [];
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
  onAddoption() {
    this.fillInTheBlankTextQuestion;
    localStorage.setItem(
      'fillInTheBlankTextQuestion',
      this.fillInTheBlankTextQuestion
    );
  }
  addAnswer(num1: any) {
    console.log(num1);
    this.answers.push(num1);

    console.log(this.answers);
    this.answer = '';
  }
  onDelete(num1: any) {
    this.answers = this.answers.filter((e) => e !== num1);
  }

  addRow() {    
    // this.newDynamic = {name: "", email: "",phone:""};  
    //   this.dynamicArray.push(this.newDynamic);  
    //  // this.toastr.success('New row added successfully', 'New Row');  
    //   console.log(this.dynamicArray);  
    //   return true;  
  }  

  deleteRow(index:any) {  
      // if(this.dynamicArray.length ==1) {  
    //  //   this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
    //       return false;  
    //   } else {  
    //       this.dynamicArray.splice(index, 1);  
    //   //    this.toastr.warning('Row deleted successfully', 'Delete row');  
    //       return true;  
    //   }  
  }
}

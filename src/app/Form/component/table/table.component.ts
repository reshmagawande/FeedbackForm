import { Component, OnInit,OnChanges, Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ComponentCommunicationService } from '../../services/component-communication.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // dataSource = new MatTableDataSource<any>();
  @Input() tableInput: [];
  
  dataSource: any;
  tabledata: Subscription | undefined
  constructor( private componentCommunicationService: ComponentCommunicationService,
    private localStorageService: LocalStorageService) {
   
  this.tableData();

   }

  ngOnInit(): void {
    this.tableData();
  }
  ngOnChanges(){
    console.log(this.tableInput);
    this.dataSource = this.tableInput;
  }

  tableData(){
    let multipleChoiceStandardQuestionData = this.localStorageService.getData('Question');
    this.dataSource = multipleChoiceStandardQuestionData;

  }

  displayedColumns: Array<string> = [
    'index',
    'questionType',
    'question',
    'options'
    // ,'actions'
  ]

  onEdit(row){
console.log('row>>>.',row);
  }
 
ngOnDestroy(){
  this.tabledata?.unsubscribe();
}
}

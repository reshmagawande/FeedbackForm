import { Component, OnInit } from '@angular/core';
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

  dataSource: any;
  tabledata: Subscription | undefined
  constructor( private componentCommunicationService: ComponentCommunicationService,
    private localStorageService: LocalStorageService) {
   
  this.tableData();

   }

  ngOnInit(): void {
    let data =localStorage.getItem('multipleChoiceStandardQuestion');
    this.tableData();
  }

  getTableData() {
    this.componentCommunicationService.subscriber$.subscribe(data => {
      console.log(data);
      this.dataSource = data;
    });
  }

  tableData(){
    let multipleChoiceStandardQuestionData = this.localStorageService.getData('Question');
    this.dataSource = multipleChoiceStandardQuestionData;

  }

  displayedColumns: Array<string> = [
    // 'index',
    'questionType',
    'question',
    'actions'
  ]
 
ngOnDestroy(){
  this.tabledata?.unsubscribe();
}
}

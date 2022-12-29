import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComponentCommunicationService } from '../../services/component-communication.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // dataSource = new MatTableDataSource<any>();
  dataSource: any;
  constructor( private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit(): void {
 
  this.getTableData();
  }

  getTableData() {
    this.componentCommunicationService.subscriber$.subscribe(data => {
      console.log(data);
      this.dataSource = data;
      console.log('this.dataSource >>>>',this.dataSource);

    });
  }

  displayedColumns: Array<string> = [
    // 'index',
    'questionType',
    'question',
    'actions'
  ]
  EXAMPLE_DATA = [
    {questionType: 'Multiple Choice - Standard', question: 'Which is the largest country in the world?', },
    { questionType:'Multiple Choice - Multiple Response', question: 'Which of the following are continents?', },
    { questionType:'Fill In The Blanks - Text', question: '________ is the largest country in the world?',  },
    {questionType:  'Fill In The Blanks - Dropdown', question: '________^ of the following arethe continents?',},
  ]

}

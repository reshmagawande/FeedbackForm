import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() tableInput: [];

  dataSource: any;
  tabledata: Subscription | undefined;
  constructor(private localStorageService: LocalStorageService) {
    this.tableData();
  }

  ngOnInit(): void {
    this.tableData();
  }
  ngOnChanges() {
    console.log(this.tableInput);
    this.dataSource = this.tableInput;
  }

  tableData() {
    let multipleChoiceStandardQuestionData =
      this.localStorageService.getData('Question');
    this.dataSource = multipleChoiceStandardQuestionData;
  }

  displayedColumns: Array<string> = [
    'index',
    'questionType',
    'question',
    'options',
  ];

  ngOnDestroy() {
    this.tabledata?.unsubscribe();
  }
}

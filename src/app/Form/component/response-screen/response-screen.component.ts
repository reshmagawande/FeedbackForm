import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-response-screen',
  templateUrl: './response-screen.component.html',
  styleUrls: ['./response-screen.component.css'],
})
export class ResponseScreenComponent {
  dataList: any = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    let data = this.localStorageService.getData('questionAndAnswer');
    data.forEach((ele: any) => {
      this.dataList.push(ele);
    });
  }
}

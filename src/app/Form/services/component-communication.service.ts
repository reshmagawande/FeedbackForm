import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {



  constructor() { }
  flag = new Subject<any>();

 observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  emitData(data: any) {
    this.flag.next(data);
  }
  getEmittedData(){
    return this.flag.asObservable();
  }
}

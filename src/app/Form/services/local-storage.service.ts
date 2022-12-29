import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  data: any
  constructor() { }

  setData(key: any, value: any) {
    localStorage.setItem(key, value)
  }

  getData(key: any) {
    try {
      return (this.data = JSON.parse(
        localStorage.getItem(key) || ''
      ));
    } catch (error) {
      return null;
    }
  }

  removeData() {}
}

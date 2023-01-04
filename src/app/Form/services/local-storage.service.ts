import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  data: any;
  constructor() {}

  setData(key: any, value: any) {
    localStorage.setItem(key, value);
  }

  getData(key: any) {
    try {
      return (this.data = JSON.parse(localStorage.getItem(key) || ''));
    } catch (error) {
      return null;
    }
  }

  removeData() {}

  set(key: any, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {}
  }

  get(key: any) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }
}

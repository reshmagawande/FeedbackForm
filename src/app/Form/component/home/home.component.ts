import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  states: string[] = ['Europe','Asia','Austellia','Austia']
}

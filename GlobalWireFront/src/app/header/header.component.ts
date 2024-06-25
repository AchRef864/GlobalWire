import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentDate: string;

  constructor() {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', // Display full weekday name
      month: 'long', // Display full month name
      day: 'numeric', // Display day of the month
      year: 'numeric' // Display full year
    };
    const today = new Date().toLocaleDateString(undefined, options);
    this.currentDate = today;
  }
}

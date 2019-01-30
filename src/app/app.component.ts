import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Clock Helper by Bill McGough';
  ClockInTime: Date = new Date(2019, 1, 1, 8, 0, 0, 0);
  TotalHoursNeeded: number = 8;
  LunchTime: number = 30;
  TotalMinutesNeeded: number = 0;
  ClockOutTime: Date = new Date();
  allowMouseWheel = true;
  showSpinners = false;
  minuteStep = 1;
  DaysThisWeek = 5;
  HoursThisWeek = 40;
  coinwallet: string[] = ['Weekly to Daily Hourly Breakdown', 'Clock Out Calculator'];
  selectedwallet = this.coinwallet[0];

  minTommss(minutes) {
    var hours = Math.floor(Math.abs(minutes));
    var mins = Math.floor((Math.abs(minutes) * 60) % 60);
    return hours + (hours === 1 ? " hour " : " hours ") + (mins > 0 ? "and " : "") + (mins > 0 ? mins + (mins === 1 ? " minute" : " minutes") : "");
  }

  CalculateHoursPerDay() {
    var result = this.HoursThisWeek / this.DaysThisWeek
    return this.minTommss(result);
  }

  CalculateClockOutTime() {
    var clockInDate = this.ClockInTime;
    var clockOutDate = this.ClockOutTime;
    clockOutDate.setHours(clockInDate.getHours() + this.TotalHoursNeeded);
    clockOutDate.setMinutes(clockInDate.getMinutes() + this.LunchTime);
    if (this.TotalMinutesNeeded !== null) {
      clockOutDate.setMinutes(clockOutDate.getMinutes() + this.TotalMinutesNeeded)
    }
    return clockOutDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}

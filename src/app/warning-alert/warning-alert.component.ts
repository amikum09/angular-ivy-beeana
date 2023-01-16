import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
})
export class WarningAlertComponent implements OnInit {
  enableordisable = false;
  buttonIsClicked = 'Button is not yet clicked';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.enableordisable = true;
    }, 15000);
  }

  onClickOfButton() {
    this.buttonIsClicked = 'Button is clicked';
  }

  printTheInput() {
    console.log("it's working");
  }

  ngOnInit() {}
}

import { Component } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Work';

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  close():void {
    this.sidenav.close();
  }
}

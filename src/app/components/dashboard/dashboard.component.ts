import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  styles: []
})

export class DashboardComponent implements OnInit {

  @ViewChild('showImage1') showImage1: ModalDirective;
  @ViewChild('showImage2') showImage2: ModalDirective;
 
  constructor(private _location : Location) { }

  ngOnInit() {
  }

  //Show Image1 Dialog Form
  onShowImage1() {
    this.showImage1.show()
  }
  //Show Image2 Dialog Form
  onShowImage2() {
    this.showImage2.show()
  }
}

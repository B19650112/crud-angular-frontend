import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: ` <div class="stars" style="margin-top:10vh;">
  <div class="central-body">
      <img class="image-404" src="assets/image/404.png" width="300px">
      <a href="/" class="btn-go-home" target="_blank">Back</a>
  </div>
</div>
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
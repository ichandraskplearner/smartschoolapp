import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  activeId: Number | undefined = undefined;

  ngOnInit() {
    this.activeId = 1;
  }
}

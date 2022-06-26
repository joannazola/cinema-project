import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  condition: any = localStorage.getItem('pass');
  ngOnInit(): void {}

  onClickClear = () => {
    localStorage.clear();
  };

  onClickRefresh = () => {
    window.location.reload();
  };
}

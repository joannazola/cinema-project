import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-whats-on',
  templateUrl: './whats-on.component.html',
  styleUrls: ['./whats-on.component.scss'],
})
export class WhatsOnComponent implements OnInit {
  li: any;
  lis = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/movies').subscribe((Response) => {
      console.log(Response);
      this.li = Response;
      this.lis = this.li.Men;
      console.log(this.li);
    });
  }
}

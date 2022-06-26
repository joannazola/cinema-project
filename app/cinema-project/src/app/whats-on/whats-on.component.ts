import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import * as io from 'socket.io-client';
var socket = io.connect('http://localhost:3100');

@Component({
  selector: 'app-whats-on',
  templateUrl: './whats-on.component.html',
  styleUrls: ['./whats-on.component.scss'],
})
export class WhatsOnComponent implements OnInit {
  movies: any;
  preorders: any;
  buy = 'XD';
  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.getMovies().subscribe((response) => {
      this.movies = response;
    });
    this.service.getPreorders().subscribe((response) => {
      this.preorders = response;
    });
  }

  sentToBuy = (mess: any) => {
    if (this.preorders.length > 0) {
      alert(`You have an unfinished order!`);
    } else {
      socket.emit('preorder', mess);
    }
  };
}

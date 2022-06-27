import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import * as io from 'socket.io-client';
var socket = io.connect('http://localhost:3100');
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent implements OnInit {
  preorders: any;
  moviesHours: any;
  places: any;
  hour: any;
  place: any;
  title: any;
  preorderLogin: any;

  constructor(private service: MoviesService) {}

  profileForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  public ngOnInit(): void {
    this.service.getPreorders().subscribe((response) => {
      this.preorders = response;
      console.log(this.preorders);

      this.preorders.map((mapResponse: any) => {
        this.title = mapResponse.movie;
        console.log(this.title);
      });
    });
    this.service.getHours().subscribe((response) => {
      this.moviesHours = response;
      console.log(this.moviesHours);
    });
    this.service.getPlaces().subscribe((response) => {
      this.places = response;
      console.log(this.places);
    });
  }

  onSelectedPlace(value: string): void {
    if (value == 'Available hours') {
      alert('Incorrect data');
    }
    this.place = value;
  }

  onSelectedHour(value: string): void {
    if (value == 'Available hours') {
      alert('Incorrect data');
    }
    this.hour = value;
  }

  onSubmit() {
    if (localStorage.getItem('pass')) {
      this.preorderLogin = {
        title: this.title,
        name: this.profileForm.value.name,
        lastName: this.profileForm.value.lastName,
        email: this.profileForm.value.email,
        hour: this.hour,
        place: this.place,
        login: localStorage.getItem('pass'),
      };
      socket.emit('loggedin', this.preorderLogin);
      alert(`Go to the "My tickets" tab to see your tickets`);
    } else {
      this.preorderLogin = {
        title: this.title,
        name: this.profileForm.value.name,
        lastName: this.profileForm.value.lastName,
        email: this.profileForm.value.email,
        hour: this.hour,
        place: this.place,
      };
      socket.emit('notloggedin', this.preorderLogin);
      alert('You need to login first');
    }

    console.log(this.preorderLogin);
  }
}

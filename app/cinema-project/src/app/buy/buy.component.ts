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
    console.log(
      this.preorders,
      this.profileForm.value.name,
      this.profileForm.value.lastName,
      this.profileForm.value.email,
      this.hour,
      this.place
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MoviesService } from '../services/movies.service';
import * as io from 'socket.io-client';
var socket = io.connect('http://localhost:3100');
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: MoviesService) {}
  profileForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  login: any;
  orders: any;
  order: any;
  message: any;

  ngOnInit(): void {
    this.service.getOrdersWithoutLogin().subscribe((response) => {
      this.orders = response;
      this.orders.map((response: any) => {
        this.order = response;
      });
    });
  }
  myFunc() {
    socket.emit('hello', 'Hello server');
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value.login);

    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        let table = [];
        // console.log(data);
        data.map((users: any) => {
          if (
            this.profileForm.value.login === users.username &&
            this.profileForm.value.password === users.password
          ) {
            table.push(this.profileForm.value.login);
            this.login = this.profileForm.value.login;
          }
        });
        if (table.length === 0) {
          alert('Nieprawidłowe dane logowania');
        } else if (table.length == 1) {
          alert('Pomyślenie zalogowano!');
          localStorage.setItem('pass', this.login);
          if (this.order.title !== null) {
            this.message = {
              title: this.order.order.title,
              name: this.order.order.name,
              lastName: this.order.order.lastName,
              email: this.order.order.email,
              hour: this.order.order.hour,
              place: this.order.order.place,
              login: this.login,
            };
          }
          console.log(this.message);
          socket.emit('loggedin', this.message);
          alert('Go to the "My tickets" tab to see your tickets');
          window.location.reload();
        }
      });
  }
}

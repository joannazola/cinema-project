import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as io from 'socket.io-client';
var socket = io.connect('http://localhost:3100');
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  profileForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}
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
            table.push('1');
          }
        });
        if (table.length === 0) {
          alert('Nieprawidłowe dane logowania');
        } else if (table.length == 1) {
          alert('Pomyślenie zalogowano!');
          localStorage.setItem('pass', 'ok');
          window.location.reload();
        }
      });
  }
}

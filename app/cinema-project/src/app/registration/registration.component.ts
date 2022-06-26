import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as io from 'socket.io-client';
var socket = io.connect('http://localhost:3100');

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  message: any;

  constructor() {}
  profileForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}
  myFunc() {
    socket.emit('read', 'Hello server');
  }
  onSubmit() {
    this.message = {
      username: this.profileForm.value.login,
      password: this.profileForm.value.password,
    };
    console.warn(this.profileForm.value.login);

    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        let table = [];
        // console.log(data);
        data.map((users: any) => {
          if (this.profileForm.value.login === users.username) {
            table.push('1');
          }
        });
        if (table.length === 0) {
          alert('Account created successfully');
          socket.emit('read', this.message);
        } else if (table.length == 1) {
          alert('The username is no longer available!');
        }
      });
  }
}

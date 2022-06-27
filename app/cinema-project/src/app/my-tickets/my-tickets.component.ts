import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss'],
})
export class MyTicketsComponent implements OnInit {
  orders: any;
  login: any = localStorage.getItem('pass');
  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.getOrders().subscribe((response) => {
      this.orders = response;
    });
  }
}

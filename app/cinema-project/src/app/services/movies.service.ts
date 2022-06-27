import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url = 'http://localhost:3000/movies';
  private urlPreorders = 'http://localhost:3000/preorders';
  private urlHours = 'http://localhost:3000/availableHours';
  private urlPlaces = 'http://localhost:3000/places';
  private urlGetOrders = 'http://localhost:3000/orders';
  private urlWithoutLogin = 'http://localhost:3000/preorderWithoutLogin';

  constructor(private httpClient: HttpClient) {}

  getMovies() {
    return this.httpClient.get(this.url);
  }
  getPreorders() {
    return this.httpClient.get(this.urlPreorders);
  }
  getHours() {
    return this.httpClient.get(this.urlHours);
  }
  getPlaces() {
    return this.httpClient.get(this.urlPlaces);
  }
  getOrders() {
    return this.httpClient.get(this.urlGetOrders);
  }
  getOrdersWithoutLogin() {
    return this.httpClient.get(this.urlWithoutLogin);
  }
}

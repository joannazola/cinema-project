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
}

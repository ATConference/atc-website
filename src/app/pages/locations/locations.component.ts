import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  // tslint:disable-next-line:max-line-length
  imageUrl = '/assets/locations/locations.jpg';
  mapsUrl = 'https://www.google.com/maps/embed/v1/place?q=%EC%84%9C%EA%B0%95%EB%8C%80%ED%95%99%EA%B5%90%20art%26technology&key=AIzaSyDm6fKakzwOP7pip3jiGKmyUKTD5Eulj_8';
}

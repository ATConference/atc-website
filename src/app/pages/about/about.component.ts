import { Component } from '@angular/core';

import { ABOUT_DATA } from './about-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  data = ABOUT_DATA;
}

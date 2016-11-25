import { Component } from '@angular/core';

import { FOOTER_DATA } from './footer-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  data = FOOTER_DATA;
}

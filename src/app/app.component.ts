import './rxjs-operators';

import { Component } from '@angular/core';

import { NavItem } from './core/navbar/nav-item.model';
import { NAV_ITEMS } from './nav-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ATC';
  navItems: NavItem[] = NAV_ITEMS;
}

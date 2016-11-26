import { Component, Input } from '@angular/core';

import { NavbarService } from '../shared/navbar.service';
import { NavItem } from '../shared/nav-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() title: string;
  @Input() items: NavItem[];

  isCollapsed = true;

  constructor(private service: NavbarService) {}

  get isAlternative() {
    return this.service.isAlternative;
  }
}

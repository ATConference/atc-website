import { Component, OnInit, OnDestroy } from '@angular/core';

import { MnFullpageOptions, MnFullpageService } from 'ng2-fullpage';

import { NavbarService } from '../../core/shared/navbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  mnFullpageOptions: MnFullpageOptions;

  catalogue = {
    text: {
      en: 'Exhibition Catalogue',
      ko: '전시도록 현장판매'
    },
    imageUrl: {
      en: '/assets/catalogue_en.jpg',
      ko: '/assets/catalogue_ko.jpg'
    }
  };

  slideItems = [
    {
      participantId: 59,
      imageUrl: '/assets/lecture1.jpg'
    },
    {
      participantId: 60,
      imageUrl: '/assets/lecture2.jpg'
    }
  ];

  constructor(
    private fullpageService: MnFullpageService,
    private navbarService: NavbarService
  ) {
    this.mnFullpageOptions = new MnFullpageOptions;
    this.mnFullpageOptions.navigation = true;
    this.mnFullpageOptions.keyboardScrolling = true;
    this.mnFullpageOptions.controlArrows = false;
    this.mnFullpageOptions.anchors = [
      'intro', 'video', 'catalogue'
    ];
    this.mnFullpageOptions.slideSelector = 'fp-slide';

    this.mnFullpageOptions.onLeave = (index, nextIndex, direction) => {
      this.navbarService.isAlternative = nextIndex === 1 ? true : false;
    };

    // this.mnFullpageOptions.paddingTop = '88px';

    // this.mnFullpageOptions.afterLoad = (anchorLink, index) => {
    //   this.navbarService.isAlternative = anchorLink === 'intro' ? true : false;
    // }
  }

  ngOnInit() {
    this.navbarService.isAlternative = true;
  }

  ngOnDestroy() {
    this.fullpageService.destroy('all');
    this.navbarService.isAlternative = false;
  }
}

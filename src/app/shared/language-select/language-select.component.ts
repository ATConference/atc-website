import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ko']);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ko/) ? browserLang : 'en');
  }

  get languages() {
    return this.translate.getLangs();
  }

  get currentLang() {
    return this.translate.currentLang;
  }

  set currentLang(lang: string) {
    this.translate.use(lang);
  }

}

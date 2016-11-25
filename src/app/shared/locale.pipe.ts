import { Pipe, PipeTransform } from '@angular/core';

import { TranslateService } from 'ng2-translate';

@Pipe({ name: 'locale', pure: false })
export class LocalePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(map: Object) {
    return map[this.translate.currentLang];
  }
}

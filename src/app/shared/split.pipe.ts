import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'split', pure: false })
export class SplitPipe implements PipeTransform {

  transform(str: string, separator: string) {
    return str.split(separator)
  }
}

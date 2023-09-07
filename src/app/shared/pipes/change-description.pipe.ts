import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDescription'
})
export class ChangeDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 180) {
      return value.slice(0, 180).toString() + ' ...';
    } else {
      return value;
    }
  }

}

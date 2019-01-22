import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxText'
})
export class maxTextPipe implements PipeTransform {
  transform(text: string, max: number = 100): string {
    if(text.length > max){
      return text.substr(0,max) + '...';
    }
    return text;
  }
}

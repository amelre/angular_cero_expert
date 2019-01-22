import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){

  }

  transform(value: string): any {

      let url = "https://www.youtube.com/embed/";
    // return this.domSanitizer.bypassSecurityTrustUrl( url + value );
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}

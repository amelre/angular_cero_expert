import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import  { map} from 'rxjs/operators';


@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlSpotify : string = 'https://api.spotify.com/v1/';

  token : string = 'BQASngm8isRtf7Dr8wLe8aPOZGmT_ZXBYV6Xs7n6E7crAaN8LFDLrLJo7jzjWwiuHY4FaXyvbA9_r-2y_LY';

  constructor(public http:HttpClient) {
    console.log("servicio listo");
   }

   private getHeaders() : HttpHeaders{
       let headers = new HttpHeaders({
         'authorization':'Bearer '+ this.token
       });
       return headers;
   }

   getNewReleases(){
       let url = `${ this.urlSpotify }browse/new-releases`;
       let headers = this.getHeaders();
       return this.http.get(url,{ headers});
   }

   getArtsta(id: string){
       let url = `${this.urlSpotify}artists/${ id }`;

       let headers = this.getHeaders();

       return this.http.get(url, { headers });
        // .map( (resp:any) => {
        //     this.artistas = resp.artists.items;
        //     return this.artistas;
        // });
   }

   getTop(id: string){
       let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=MX`

       let headers = this.getHeaders();

       return this.http.get(url, { headers });
   }

   getArtistas(termino: string){
     let url = `${this.urlSpotify}search?query=${ termino }&type=artist&limit=20`;

     let headers = this.getHeaders();

     return this.http.get(url, { headers })
      .pipe( map( (resp:any) => {
          this.artistas = resp.artists.items;
          return this.artistas;
      }));

   }

}

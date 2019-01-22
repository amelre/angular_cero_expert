import { Injectable } from '@angular/core';

import { Jsonp , Http} from '@angular/http';
import 'rxjs/RX';
import 'rxjs/add/operator/map'

@Injectable()
export class PeliculasService {

  private apiKey:string = "14e3df081df23fa204c834591caefb3a";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  private lastPartUrl:string = `api_key=${ this.apiKey}&language=es&callback=JSONP_CALLBACK`;
  private urlMovieImages:string = "http://image.tmdb.org/t/p/w300";

  peliculas: any[] =[];
  constructor(private jsonp:Jsonp) { }

  getPopular(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&${ this.lastPartUrl}`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

  getKidsPopular(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${ this.lastPartUrl}`;
    return this.jsonp.get(url)
      .map(res => res.json());
  }

  getActuales(){
    let date = new Date();;
    let before = new Date();
    before.setDate(before.getDate() + 7);
    let dateNow = `${ date.getFullYear() }-${date.getMonth() + 1 }-${date.getDate()}`;
    let dateBefore = `${ before.getFullYear() }-${before.getMonth() + 1}-${before.getDate()}`;


    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${dateBefore}&primary_release_date.lte=${dateNow}&${ this.lastPartUrl }`;
    return this.jsonp.get(url)
      .map(res=> res.json());
  }

  buscarPelicula(texto:string){

    let url =  `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&${ this.lastPartUrl}`

    return this.jsonp.get(url)
      .map(res => {
          this.peliculas = res.json().results;
          return res.json().results;
      });

  }

  getMovieById(id:string){
    let url = `${ this.urlMoviedb }/movie/${id}?${ this.lastPartUrl}`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

}

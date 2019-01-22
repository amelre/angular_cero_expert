import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];


  constructor( private _heroesService:HeroesService,
               private _activatedRoute:ActivatedRoute,
               private _router:Router
              ) {
              }

  ngOnInit() {
      this._activatedRoute.params.subscribe(params => {
        this.heroes = this._heroesService.buscarHeroes(params['word']);
      })

  }

  verHeroe(idx:number){
    this._router.navigate( ['/heroe',idx] );
  }

}

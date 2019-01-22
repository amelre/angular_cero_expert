import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  casa:any = {
    'DC':'assets/img/dc.png',
    'Marvel':'assets/img/marvel.png'
  };

  constructor(  private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService
              ) {
      this.activatedRoute.params.subscribe(params => {
      this.heroe = _heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    } )

   }



}

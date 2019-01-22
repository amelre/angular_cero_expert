import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

    heroes:any;
    loading: boolean = true;

    borrarHeroe(key$:string){
        this._heroeService.borrarHeroe(key$)
            .subscribe(respuesta => {
                if(respuesta){
                    console.error(respuesta);
                }else{
                    delete this.heroes[key$];
                }
            })

    }

  constructor(private _heroeService: HeroesService) {
      this._heroeService.getHeroes()
        .subscribe( heroes => {
            setTimeout(()=>{this.loading = false; this.heroes = heroes;},500);

        } )

  }

  ngOnInit() {
  }

}

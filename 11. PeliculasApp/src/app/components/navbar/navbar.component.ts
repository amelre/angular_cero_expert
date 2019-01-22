import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  nombrePelicula:string = '';

  constructor(private _ps:PeliculasService,
              private _router:Router) {
  }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.nombrePelicula.length > 0){
        this._router.navigate( ['search',this.nombrePelicula] );
    }
  }



}

import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {

  constructor(private _ps:PeliculasService) {

    this._ps.getPopular()
      .subscribe(data=> console.log(data));

      this._ps.buscarPelicula("harry potter")
        .subscribe(data=> console.log(data));
  }



  ngOnInit() {
  }



}

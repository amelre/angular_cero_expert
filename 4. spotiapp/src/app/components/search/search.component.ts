import { Component } from '@angular/core';

import {SpotifyService} from "../../services/spotify.service";


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent {
    termino: string = '';
    artistas: any[] = [];
    loading:boolean;

    constructor(public _spotify:SpotifyService) { }

    buscarArtista(){
        if(this.termino.length == 0){ return;}

        this._spotify.getArtistas(this.termino)
        .subscribe();
    }

    buscar(termino: string){
        this.loading = true;
        // if(termino.length == 0){ return;}
        this._spotify.getArtistas(termino)
        .subscribe(data => {
            this.artistas = data;
            this.loading = false;
        });
    }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service'
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
    artista: any = {};
    tracks : any[] = [];

  constructor(  private activatedRoute: ActivatedRoute,
                public _spotify: SpotifyService) { }

  ngOnInit() {

      this.activatedRoute.params
      .subscribe(params => {
          console.log(params.id);
          this._spotify.getArtsta(params.id).subscribe(
              artista => {
                  console.log(artista);
                  this.artista = artista;
              }
          );

           this._spotify.getTop(params.id)
            .subscribe(
               (resp: any) =>{
                   console.log(resp.tracks);
                   this.tracks = resp.tracks;
               });
      });

  }

  goToSpotify(){
      console.log(this.artista.external_urls.spotify);
  }

}

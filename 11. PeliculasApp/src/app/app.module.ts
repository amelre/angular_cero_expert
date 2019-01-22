import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';

import { PeliculasService } from './services/peliculas.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { GaleriaComponent } from './components/home/galeria.component';

import { APP_ROUTING } from './app.routes';
import { SearchComponent } from './components/search/search.component'

import { maxTextPipe } from './pipes/textMax.pipe';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    SearchComponent,
    maxTextPipe,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

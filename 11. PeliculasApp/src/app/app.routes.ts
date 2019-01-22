import { RouterModule, Routes } from '@angular/router';


import { HomeComponent} from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelicula/:id/:pag', component: DetailsComponent},
  { path: 'pelicula/:id/:pag/:busqueda', component: DetailsComponent},
  { path: 'search', component: SearchComponent},
  { path: 'search/:texto', component: SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

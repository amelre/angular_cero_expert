import { Routes, RouterModule } from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';


const Rutas : Routes = [
    
    {path: 'fotos', component: FotosComponent},
    {path: 'cargar', component: CargaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'fotos'}

];

export const APP_ROUTES = RouterModule.forRoot(Rutas);

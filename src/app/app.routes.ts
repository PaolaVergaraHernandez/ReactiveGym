import { Routes } from '@angular/router';

import { ClasesComponent } from './components/clases/clases.component';
import {
  FormularioComponent,
} from './components/formulario/formulario.component';
import { GimnasioComponent } from './components/gimnasio/gimnasio.component';
import { HomeComponent } from './components/home/home.component';
import {
  OfertasViewComponent,
} from './components/ofertas-view/ofertas-view.component';
import { PlanesComponent } from './components/planes/planes.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [

    {path:'', component: HomeComponent, title:'Home Page'},
    {path: 'ofertas', component: OfertasViewComponent, title: 'ver Ofertas' },
    {path: 'productos', component: ProductosComponent },
    {path: 'clases', component: ClasesComponent},
    {path: 'planes', component: PlanesComponent}, 
    {path: 'gimnasio', component: GimnasioComponent},
    {path: 'formulario', component: FormularioComponent},
    
    

    
      
  ];


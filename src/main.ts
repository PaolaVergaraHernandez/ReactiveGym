import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <- Importante para que funcione el carrusel
import 'bootstrap/dist/css/bootstrap.min.css';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));

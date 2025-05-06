import { Component } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
} from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ← ¡aquí está el fix!
})
export class AppComponent {}

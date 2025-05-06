import { Component } from '@angular/core';

import {
  HousingLocationComponent,
} from '../housing-location/housing-location.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-ofertas-view',
  standalone: true,
  imports: [HousingLocationComponent, NavbarComponent],
  templateUrl: './ofertas-view.component.html',
  styleUrl: './ofertas-view.component.css'
})
export class OfertasViewComponent {

}

import {
  CommonModule,
  NgFor,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselComponent } from '../carousel/carousel.component';
import { InfoSectionComponent } from '../info-section/info-section.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NgFor, RouterLink, ProductCardComponent, CarouselComponent, InfoSectionComponent ]
})
export class HomeComponent {
  products = [
    {
      title: 'Guantes de Box',
      imageUrl: 'assets/guante.png',
      location: 'Zona Fitness',
      description: 'Alta calidad y durabilidad.'
    },
    {
      title: 'Proteína Whey',
      imageUrl: 'assets/123.png',
      location: 'Zona Suplementos',
      description: 'Ideal para ganar masa muscular.'
    },
    {
      title: 'Short Deportivo',
      imageUrl: 'assets/shorts.png',
      location: 'Zona Ropa',
      description: 'Cómodo y fresco para entrenar.'
    },
    {
      title: 'Banda de Resistencia',
      imageUrl: 'assets/BANDA.png',
      location: 'Zona Accesorios',
      description: 'Perfecta para entrenamientos en casa.'
    }
  ];

  filterResults(text: string) {
    // Tu lógica de búsqueda (puedes dejarla vacía para pruebas)
  }
}

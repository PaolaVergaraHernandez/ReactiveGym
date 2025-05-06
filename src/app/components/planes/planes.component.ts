import {
  CommonModule,
  isPlatformBrowser,
} from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  planes = [
    {
      nombre: 'Plan Mensual',
      precio: '$299/mes',
      beneficios: [
        'Acceso ilimitado al gimnasio',
        'App con rutinas personalizadas',
        'Acceso a clases grupales'
      ]
    },
    {
      nombre: 'Plan Semanal',
      precio: '$99/semana',
      beneficios: [
        'Acceso ilimitado al gimnasio',
        'App con rutinas personalizadas',
        'Acceso a clases grupales'
      ]
    },
    {
      nombre: 'Plan Anual',
      precio: '$2999/año',
      beneficios: [
        'Acceso ilimitado al gimnasio',
        'App con rutinas personalizadas',
        'Acceso a clases grupales'
      ]
    }
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const carouselElement = document.querySelector('#carouselExampleAutoplaying');
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 1000,
          ride: 'carousel'
        });
      }
    }
  }
}

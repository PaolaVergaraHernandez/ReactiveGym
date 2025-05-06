import { Injectable } from '@angular/core';

import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private housingLocationList: HousingLocation[] = [
    {
      id: 1,
      name: 'Proteína Whey',
      city: 'Suplementos',
      photo: 'assets/123.png',
      description: 'Proteína de suero para el desarrollo muscular.',
      available: true,
      price: '$599'
    },
    {
      id: 2,
      name: 'Multivitamínico Complejo',
      city: 'Vitaminas',
      photo: 'assets/VITA.png',
      description: 'Complejo vitamínico para fortalecer el sistema inmune.',
      available: true,
      price: '$299'
    },
    {
      id: 3,
      name: 'Pre-entreno NitroX',
      city: 'Energía',
      photo: 'assets/NITRO.png',
      description: 'Pre-entreno para potenciar tu rendimiento.',
      available: false,
      price: '$450'
    },
    {
      id: 4,
      name: 'BCAA Recovery',
      city: 'Recuperación',
      photo: 'assets/BCAA.png',
      description: 'Aminoácidos esenciales para una mejor recuperación.',
      available: true,
      price: '$120'
    },
    {
      id: 5,
      name: 'Creatina Powder',
      city: 'Recuperación',
      photo: 'assets/CREA.png',
      description: 'Aminoácidos esenciales para una mejor recuperación.',
      available: true,
      price: '$349'
    },
    {
      id: 6,
      name: 'Barritas FitBar',
      city: 'Recuperación',
      photo: 'assets/456.png',
      description: 'Aminoácidos esenciales para una mejor recuperación.',
      available: true,
      price: '$220'
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(location => location.id === id);
  }
}

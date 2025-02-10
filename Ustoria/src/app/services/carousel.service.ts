import { Injectable } from '@angular/core';
import { Carousel } from '../shared/models/Carousel';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  carousel: Carousel[] = [
    {
      header: 'iPhone',
      paragraph: 'Dual SIM',
      imageUrl: 'assets/h4-slide.png',
      imageName: 'IPhone',
      greenSpan: '6',
      greenStrong: 'Plus',
    },
    {
      header: 'by one, get one ',
      paragraph: 'school supplies & backpacks.*',
      imageUrl: 'assets/h4-slide2.png',
      imageName: 'school supplies',
      greenSpan: '50%',
      greenStrong: 'off',
    },
    {
      header: 'Apple ',
      paragraph: 'Select Item',
      imageUrl: 'assets/h4-slide3.png',
      imageName: 'Apple Ipod',
      greenSpan: 'Store',
      greenStrong: 'Ipod',
    },
    {
      header: 'Apple ',
      paragraph: '& Phone',
      imageUrl: 'assets/h4-slide4.png',
      imageName: 'Apple Ipod',
      greenSpan: 'Store',
      greenStrong: 'Ipod',
    },
  ];

  constructor() {}

  GetCarousel() {
    return this.carousel;
  }
}

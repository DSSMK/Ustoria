import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Carousel } from '../shared/models/Carousel';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  carousel = {} as Carousel[];
  constructor(private carouselData: CarouselService) {}
  ngOnInit(): void {
    this.carousel = this.carouselData.GetCarousel();
  }
}

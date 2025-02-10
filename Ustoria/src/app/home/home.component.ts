import { Component, OnInit } from '@angular/core';
import { LatestProductsComponent } from '../latest-products/latest-products.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LatestProductsComponent,
    CarouselComponent,
    CommonModule,
    CarouselModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  brands = [
    {
      src: 'assets/brand1.png',
      imageName: 'image 1',
    },
    {
      src: 'assets/brand2.png',
      imageName: 'image 2',
    },
    {
      src: 'assets/brand3.png',
      imageName: 'image 3',
    },
    {
      src: 'assets/brand4.png',
      imageName: 'image 4',
    },
    {
      src: 'assets/brand5.png',
      imageName: 'image 5',
    },
    {
      src: 'assets/brand6.png',
      imageName: 'image 6',
    },
  ];
  responsiveOptions = [
    {
      breakpoint: '1600px',
      numVisible: 4,
      numScroll: 1,
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}



import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @ViewChild('navbar-expand-md', { static: true }) navbarElement!: ElementRef;

  constructor() {}
  closeNavbar() {
    setTimeout(() => {
      const isNavbarCollapsed =
        this.navbarElement?.nativeElement.classList.contains('show');
      if (isNavbarCollapsed) {
        this.navbarElement.nativeElement.classList.remove('show');
      }
    }, 1000);
  }
}

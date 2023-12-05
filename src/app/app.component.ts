import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  // templateUrl: './app.component.html',
  template: `
    <h1>Hello, {{ title }}</h1>

    <button
      [routerLink]="['/basic/counter']"
      routerLinkActive="router-link-active"
      [routerLinkActiveOptions]="{exact: true}"
    >
      baasic counter
    </button>

    <button
      [routerLink]="['/basic/counter/30']"
      routerLinkActive="router-link-active"
      [routerLinkActiveOptions]="{exact: true}"
    >
      baasic counter param
    </button>

    <button
      [routerLink]="['/basic/pokemmon']"
      routerLinkActive="router-link-active"
    >
      baasic request pokemon
    </button>

    <button
      [routerLink]="['/basic/family']"
      routerLinkActive="router-link-active"
    >
      baasic input output father son
    </button>


    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tests';
}

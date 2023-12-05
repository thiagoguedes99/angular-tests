import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { SonComponent } from '../son/son.component';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [SonComponent, JsonPipe],
  templateUrl: './father.component.html',
  styleUrl: './father.component.scss'
})
export class FatherComponent {
  public client?: Client;

  onSetClient( name: string ) {
    this.client = { id: 1, name };
  }

}

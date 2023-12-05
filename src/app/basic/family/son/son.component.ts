import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-son',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './son.component.html',
  styleUrl: './son.component.scss'
})
export class SonComponent {
  @Input() client?: Client;
  @Output() onDeleteClient  = new EventEmitter();
  @Output() onClientUpdated = new EventEmitter<Client>();

  onDelete() {
    this.client = undefined;
    this.onDeleteClient.emit();
  }

  onChange( id: number ) {
    if ( !this.client ) return;

    // this.client.id = newId; // no usar
    this.client = { ...this.client, id };

    this.onClientUpdated.emit({ ...this.client })

  }
}

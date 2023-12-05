import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-route.component.html',
  styleUrl: './counter-route.component.scss'
})
export class CounterRouteComponent {
  private route = inject(ActivatedRoute);

  private initialValue = Number(this.route.snapshot.paramMap.get('initial'));
  public counter: number = isNaN( this.initialValue ) ? 10 : this.initialValue;

  // constructor( private route: ActivatedRoute ) { }

  // ngOnInit() {
  //   const initialValue = Number(this.route.snapshot.paramMap.get('initial'));
  //   this.counter = isNaN( initialValue ) ? 10 : initialValue;
  // }

  increaseBy( value: number ) {
    this.counter += value;
  }

}

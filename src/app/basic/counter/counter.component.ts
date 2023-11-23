import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  counter: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  increaseBy( value: number ) {
    this.counter += value;
    // TODO:
    // console.log({ newValue: this.counter });

  }

}

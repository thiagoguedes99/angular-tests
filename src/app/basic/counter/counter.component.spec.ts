import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLBRElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should to click in frist button and to increment the counter by +1', () => {
    const buttons = compiled.querySelectorAll('button');

    buttons[0].click();

    expect(component.counter).toBe(11);

    buttons[0].click();
    buttons[0].click();
    buttons[0].click();

    expect(component.counter).toBe(14);
  });

  it('should to click in second button and to decrement the counter by -1', () => {
    const buttons = compiled.querySelectorAll('button');

    buttons[1].click();

    expect(component.counter).toBe(9);

    buttons[1].click();
    buttons[1].click();
    buttons[1].click();

    expect(component.counter).toBe(6);
  });


  it('should to change h1 in html when counter to change', () => {
    const h1 = compiled.querySelector('h1');

    expect(h1?.textContent).toContain('10');
    expect(h1?.textContent).toBe('Counter 10');

    component.increaseBy(10)
    fixture.detectChanges();

    expect(h1?.textContent).toContain('20');
    expect(h1?.textContent).toBe('Counter 20');

    component.increaseBy(-20)
    fixture.detectChanges();

    expect(h1?.textContent).toContain('0');
    expect(h1?.textContent).toBe('Counter 0');

  });




});

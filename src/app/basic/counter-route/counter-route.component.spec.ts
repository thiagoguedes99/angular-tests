import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouteComponent } from './counter-route.component';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute, convertToParamMap } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { of } from 'rxjs';

let mockParamMapGet: any = undefined;

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [CounterRouteComponent, RouterTestingModule],
      imports: [CounterRouteComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // queryParams: of(convertToParamMap({
            //   initial: ""
            // }))

            snapshot: {
              paramMap: {
                get: () => mockParamMapGet
              }
            }
          }
        }
      ]
    })
    .compileComponents();

    // fixture = TestBed.createComponent(CounterRouteComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should get te value 200 of router param', () => {
    mockParamMapGet = '200';

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(200);
  });

  it('should get te value 10 of router param', () => {
    mockParamMapGet = 'test';

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10);
  });
});

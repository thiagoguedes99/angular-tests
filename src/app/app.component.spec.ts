import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
// import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
      // providers: [ActivatedRoute]
      // providers: [
      //   {
      //     provide: ActivatedRoute,
      //     useValue: {
      //       queryParams: of(convertToParamMap({
      //         initial: ""
      //       }))
      //     }
      //   }
      // ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should to snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();

    expect(component).toMatchSnapshot();
  })

  it(`should have the 'angular-tests' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-tests');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-tests');
  });
});

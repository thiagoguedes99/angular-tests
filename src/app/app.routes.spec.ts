import { routes } from './app.routes'
import { CounterComponent } from './basic/counter/counter.component';


describe('AppRoutes', () => {

  it('should to match snapshot', () => {
    expect(routes).toMatchSnapshot();
  });

  it('should to length routes', () => {
    expect(routes.length).toBe(2);
  });

  it('should to router for path basic/counter the CounterComponent', () => {
    expect(routes[0].path).toBe('basic/counter');
    expect(routes[0].component).toBe(CounterComponent);
  });


});

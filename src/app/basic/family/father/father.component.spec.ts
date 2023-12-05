import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from './father.component';
import { By } from '@angular/platform-browser';
import { SonComponent } from '../son/son.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should to render the client', () => {
    component.client = { id: 3, name: 'mock_thiago' };
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');

    expect(codeDiv?.textContent).toContain('3');
    expect(codeDiv?.textContent).toContain('mock_thiago');
  });

  it('should to call onSetClient and update client', () => {
    component.client = { id: 3, name: 'mock_thiago' };
    expect(component.client).toEqual({ id: 3, name: 'mock_thiago' });

    component.onSetClient('other_name');
    expect(component.client).toEqual({ id: 1, name: 'other_name' });
  });

  it('should to delete the client when to emit onDeleteClient', () => {
    component.client = { id: 3, name: 'mock_thiago' };
    fixture.detectChanges();
    expect(component.client).toEqual({ id: 3, name: 'mock_thiago' });

    const sonDebugElement = fixture.debugElement.query( By.directive(SonComponent) );
    const sonComponent: SonComponent = sonDebugElement.componentInstance;

    sonComponent.onDeleteClient.emit();

    expect(component.client).toBe(undefined);
  });

  it('should to update the client when to emit onClientUpdated', () => {
    component.client = { id: 3, name: 'mock_thiago' };
    fixture.detectChanges();
    expect(component.client).toEqual({ id: 3, name: 'mock_thiago' });

    const sonDebugElement = fixture.debugElement.query( By.directive(SonComponent) );
    const sonComponent: SonComponent = sonDebugElement.componentInstance;

    sonComponent.onClientUpdated.emit({ id: 4, name: 'mock_thiago_2' });

    expect(component.client).toEqual({ id: 4, name: 'mock_thiago_2' });
  });
});

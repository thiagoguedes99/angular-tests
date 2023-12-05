import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonComponent } from './son.component';

describe('SonComponent', () => {
  let component: SonComponent;
  let fixture: ComponentFixture<SonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonComponent);
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

  it('should not view buttons if not has clinet', () => {
    const buttons = compiled.querySelectorAll('button');

    expect(buttons.length).toBe(0);
  });

  it('should to view buttons if has clinet', () => {
    component.client = { id: 1, name: 'thiago' };
    fixture.detectChanges();

    const buttons = compiled.querySelectorAll('button');

    expect(buttons.length).toBe(2);
  });

  it('should to match snapshot after has client', () => {
    component.client = { id: 1, name: 'thiago' };
    fixture.detectChanges();

    expect(compiled).toMatchSnapshot();
  });

  it('should to click button delete and to emit onDeleteClient', () => {
    component.client = { id: 1, name: 'thiago' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');

    const buttonDelete = compiled.querySelector('.btn-outline-danger');

    buttonDelete?.dispatchEvent( new Event('click') );

    expect(component.onDeleteClient.emit).toHaveBeenCalledTimes(1);
  });

  it('should to click button change id and to emit onClientUpdated', () => {
    component.client = { id: 1, name: 'thiago' };
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdated, 'emit');

    const buttonUpdate = compiled.querySelector('.btn-outline-primary');

    buttonUpdate?.dispatchEvent( new Event('click') );

    expect(component.onClientUpdated.emit).toHaveBeenCalledTimes(1);
    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({ id: 5, name: 'thiago' });
  });

  it('should not to emit onClientUpdated event if not has client', () => {
    component.client = undefined;
    jest.spyOn(component.onClientUpdated, 'emit');

    component.onChange(10);

    expect(component.onClientUpdated.emit).toHaveBeenCalledTimes(0);
  });

  it('should to emit onClientUpdated event with newv values client', () => {
    component.client = undefined;
    jest.spyOn(component.onClientUpdated, 'emit');

    component.onChange(10);

    expect(component.onClientUpdated.emit).toHaveBeenCalledTimes(0);

    component.client = { id: 1, name: 'thiago' };
    component.onChange(10);

    expect(component.onClientUpdated.emit).toHaveBeenCalledTimes(1);
    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({ id: 10, name: 'thiago' });
  });

  it('should to emit onDeleteClient event and resert values client in onDelete function', () => {
    component.client = { id: 1, name: 'thiago' };

    expect(component.client).toEqual({ id: 1, name: 'thiago' });

    jest.spyOn(component.onDeleteClient, 'emit');

    component.onDelete();

    expect(component.client).toEqual(undefined);
    expect(component.onDeleteClient.emit).toHaveBeenCalledTimes(1);
  });
});

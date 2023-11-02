import { render, screen } from '@testing-library/angular';

import { AuthComponent } from './auth.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AuthComponent', () => {
  let fixture: ComponentFixture<AuthComponent>;
  let component: AuthComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthComponent
      ]
    })
    fixture = TestBed.createComponent(AuthComponent)
    component = fixture.componentInstance
  });

  it('role :', async () => {
    let fixture: ComponentFixture<AuthComponent>;
  let component: AuthComponent;
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeTruthy();
  });

  it('label :', async () => {
    let fixture: ComponentFixture<AuthComponent>;
  let component: AuthComponent;
    const inputElement = screen.getByLabelText('My Input :');
    expect(inputElement).toBeTruthy();
  });

  it('TestID :', async () => {
    let fixture: ComponentFixture<AuthComponent>;
  let component: AuthComponent;
    const elementWithTestId = screen.getByTestId('test-element');
    expect(elementWithTestId).toBeTruthy();
  });

  it('Text :', async () => {
    let fixture: ComponentFixture<AuthComponent>;
  let component: AuthComponent;
    const elementWithText = screen.getByText('Get By Text');
    expect(elementWithText).toBeTruthy();
  });

  it('placeholder', async () => {
    let fixture: ComponentFixture<AuthComponent>;
    let component: AuthComponent;
    const inputElement = screen.getByPlaceholderText('Please give input');
    expect(inputElement).toBeTruthy();
  });

  // it('Wueries Priorities', async () => {
    
    
    
  //   const placeholder = screen.getByPlaceholderText('Please give input');
  //   const testID = screen.getByTestId('test-element');
  //   const labelText = screen.getByLabelText('My Input :');
  //   const role = screen.getByRole('button');
  //   const text = screen.getByText('Get By Text');
    
  //   expect(placeholder).toBeTruthy();
  //   expect(testID).toBeTruthy();
  //   expect(labelText).toBeTruthy();
  //   expect(role).toBeTruthy();
  //   expect(text).toBeTruthy();
  // });

  it('Button Click Event', async () => {
    const element = fixture.nativeElement.querySelector('#labelBtn');
    console.log('=======>',component.label);
    expect(component.label).toEqual('Click Here');
    element.click();

    fixture.detectChanges();
    expect(component.label).toEqual('You Clicked')
  })

  it('Check variable', ()=> {
    expect(typeof component.label).toBe('string')
  })
  
});
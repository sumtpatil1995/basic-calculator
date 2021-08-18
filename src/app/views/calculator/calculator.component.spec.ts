import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform the addition', () => {
    const action = "+";
    component.firstValue = 20;
    component.secondValue = 30;
    component.onUserAction(action);
    console.log(component.ans);
    expect(component.ans).toBe(50);
  });

  it('should perform the subtraction', () => {
    const action = "-";
    component.firstValue = 30;
    component.secondValue = 20;
    component.onUserAction(action);
    console.log(component.ans);
    expect(component.ans).toBe(10);
  });


  it('should perform the multiplication', () => {
    const action = "x";
    component.firstValue = 5;
    component.secondValue = 11;
    component.onUserAction(action);
    console.log(component.ans);
    expect(component.ans).toBe(55);
  });

  it('should perform the division', () => {
    const action = "/";
    component.firstValue = 25;
    component.secondValue = 5;
    component.onUserAction(action);
    console.log(component.ans);
    expect(component.ans).toBe(5);
  });

  it('should reset the calculator', () => {
    component.onClear();
    expect(component.firstValue).toBe("");
    expect(component.secondValue).toBe("");
    expect(component.ans).toBe("0");
  });
});

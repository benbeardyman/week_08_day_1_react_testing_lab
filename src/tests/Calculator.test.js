import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let add
  let subtract
  let divide
  let multiply
  let equals
  let clear

  beforeEach(() => {
    container = render(<Calculator/>)
    add = container.getByTestId("operator-add")
    subtract = container.getByTestId("operator-subtract")
    divide = container.getByTestId("operator-divide")
    multiply = container.getByTestId("operator-multiply")
    equals = container.getByTestId("operator-equals")
    clear = container.getByTestId("clear")
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })


// calculator.add() - add 1 to 4 and get 5
  it('should add two numbers together', () => {
    const button1 = container.getByTestId('number1')
    const button4 = container.getByTestId('number4') 
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button1)
    fireEvent.click(add)
    fireEvent.click(button4)
    fireEvent.click(equals)
    
    expect(runningTotal.textContent).toEqual('5')
    
  }) 

// calculator.subtract() subtract 4 from 7 and get 3
  it('should subtract one number from another', () => {
    const button4 = container.getByTestId('number4')
    const button7 = container.getByTestId('number7')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7)
    fireEvent.click(subtract)
    fireEvent.click(button4)
    fireEvent.click(equals)

    expect(runningTotal.textContent).toEqual('3')
  })

// calculator.multiply() - multiply 3 by 5 and get 15
  it('should multiply one number by another', () => {
    const button3 = container.getByTestId('number3')
    const button5 = container.getByTestId('number5')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button3)
    fireEvent.click(multiply)
    fireEvent.click(button5)
    fireEvent.click(equals)

    expect(runningTotal.textContent).toEqual('15')
  })

// calculator.divide() - divide 21 by 7 and get 3
  it('should divide one number by another', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button7 = container.getByTestId('number7')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divide)
    fireEvent.click(button7)
    fireEvent.click(equals)

    expect(runningTotal.textContent).toEqual('3')
  })

// calculator.numberClick() - concatenate multiple number button clicks
  it('should concatenate multiple numbers', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button7 = container.getByTestId('number7')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button7)

    expect(runningTotal.textContent).toEqual('217')
  })

// calculator.operatorClick() - chain multiple operations together
  it('should chain multiple operations together', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(add)
    fireEvent.click(button2)
    fireEvent.click(subtract)
    fireEvent.click(button1)
    fireEvent.click(equals)

    expect(runningTotal.textContent).toEqual('3')
  })

// calculator.clearClick() - clear the running total without affecting the calculation
  it('should clear running total without affecting calculation', () => {
      const button1 = container.getByTestId('number1')
      const button2 = container.getByTestId('number2')
      const runningTotal = container.getByTestId('running-total')
      fireEvent.click(button2)
      fireEvent.click(add)
      fireEvent.click(button2)
      fireEvent.click(subtract)
      fireEvent.click(button1)
      fireEvent.click(clear)
      fireEvent.click(equals)
      
      expect(runningTotal.textContent).toEqual('4')
    })

})


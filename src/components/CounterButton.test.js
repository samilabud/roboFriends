//import {shallow, mount, render} from  'enzyme';//Obsolete
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { create } from "react-test-renderer";
import CounterButton from  './CounterButton';




it('Expect to render CounterButton Component',()=>{
  //expect(shallow(<Card />)).toMatchSnapshot();
  const mockColor = 'red'
  const app = create(<CounterButton color={mockColor} />);
  expect(app.toJSON()).toMatchSnapshot(); 
})


it('Expect to correctly increment of the counter', () => {
  render(<CounterButton />);

  const btnIncrement = screen.getByText("Increase Counter");
  fireEvent.click(btnIncrement);

  expect(screen.getByRole("heading")).toHaveTextContent("1");
});

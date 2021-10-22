import React from 'react';
import { create } from "react-test-renderer";
import Card from  './Card';


const app = create(<Card />);

it('Testing Card component',()=>{
  //expect(shallow(<Card />)).toMatchSnapshot();
  expect(app.toJSON()).toMatchSnapshot(); 
})
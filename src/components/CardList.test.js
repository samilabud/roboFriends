import React from 'react';
import { create } from "react-test-renderer";
import CardList from  './CardList';




it('Testing CardList component',()=>{
  //expect(shallow(<Card />)).toMatchSnapshot();
  const mockRobots = [
    {
      id: 1,
      name: "Jhon Snow",
      email: "jhon.snow@zerotomastery.com"
    },
    {
      id: 2,
      name: "Katlin Star",
      email: "katlin.starw@zerotomastery.com"
    },
  ]
  const app = create(<CardList robots={mockRobots} />);
  expect(app.toJSON()).toMatchSnapshot(); 
})
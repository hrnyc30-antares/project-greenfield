import React from 'react'
import { shallow } from "enzyme";
import App from './App.js'

const setup = () => {
    return shallow(<App />);
  };

describe('App', () => {
    it('should contain 1 h1 tag', () => {
        let component = shallow(<App />)
        expect(component.find('h1').length).toEqual(1)
    });
});
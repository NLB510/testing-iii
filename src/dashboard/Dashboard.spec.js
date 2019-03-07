// Test away
import React from 'react';
import  {render, queryByText}from 'react-testing-library';
import renderer from 'react-test-renderer'
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard'
import Controls from '../controls/Controls'
import Display from '../display/Display'


describe('<Dashboard />', () => {

  
  
  
  it('dashboard should render with Controls and Display', () => {
    const dashboard = renderer.create(<Dashboard />)
    expect(dashboard.toJSON()).toMatchSnapshot();
  })
  
  




})
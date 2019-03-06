// Test away
import React from 'react';
import  {render, queryByText}from 'react-testing-library';
import renderer from 'react-test-renderer'
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard'


describe('<Dashboard />', () => {

  it.skip('dashboard should render', () => {
    const dashboard = renderer.create(<Dashboard />)
    expect(dashboard.toJSON()).toMatchSnapshot();
  })




})
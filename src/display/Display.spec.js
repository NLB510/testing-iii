
import React from 'react';
import  {render, queryByText}from 'react-testing-library';
import renderer from 'react-test-renderer'
import 'react-testing-library/cleanup-after-each';

import Display from './Display'


describe('<Display />', () => {

  


  it('should default to unlocked', () => {
    const {getByText} = render(<Display />);

    const isLocked = getByText(/Unlocked/i).textContent
    expect(isLocked).toEqual('Unlocked');
    

  })

  it('should default to closed', () => {
    const { getByText } = render(<Display />);

    // const isLocked = getByText(/locked/i).textContent
    const isOpen = getByText(/Open/i).textContent;
    expect(isOpen).toEqual('Open');


  })

  


})
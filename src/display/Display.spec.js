
import React from 'react';
import  {render, queryByText}from 'react-testing-library';
import renderer from 'react-test-renderer'
import "jest-dom/extend-expect";
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

  it('should display "Closed" and "Unlocked" if the gate is closed and unlocked', () => {
    const {getByText} = render(<Display closed={true} locked={false} />)

    expect(getByText('Unlocked')).toBeInTheDocument();
    expect(getByText('Closed')).toBeInTheDocument();

  })

  it(`should display "Locked" and "Closed" when the gate is closed and locked`, () => {
    const { getByText } = render(<Display closed={true} locked={true} />)

    expect(getByText('Closed')).toBeInTheDocument();
    expect(getByText('Locked')).toBeInTheDocument();
    


  })

  


})
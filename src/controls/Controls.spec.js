
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'
import "jest-dom/extend-expect";
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls'
const mockFunction = jest.fn();

describe('<Controls />', () => {

  it('should fire lock gate button if gate is closed', () => {
    const {getByText} = render(<Controls closed={true} locked={false} toggleLocked={mockFunction}/>)

    const lockButton = getByText(/Lock Gate/i)

    fireEvent.click(lockButton);

    expect(mockFunction).toHaveBeenCalled();

  })

  it('should fire close gate button if gate is open and unlocked', () => {
    const {getByText} = render(<Controls closed={false} locked={false} toggleClosed={mockFunction} />)

    const gateBtn = getByText(/Close Gate/i)

    fireEvent.click(gateBtn);

    expect(mockFunction).toHaveBeenCalled();


  })





})

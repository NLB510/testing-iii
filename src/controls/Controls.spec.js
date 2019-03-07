import React from "react";
import { render, fireEvent } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Controls from "./Controls";
const mockFunction = jest.fn();

describe("<Controls />", () => {
  it("should fire lock gate button if gate is closed", () => {
    const { getByText } = render(
      <Controls closed={true} locked={false} toggleLocked={mockFunction} />
    );

    const lockBtn = getByText(/Lock Gate/i);

    fireEvent.click(lockBtn);

    expect(mockFunction).toHaveBeenCalled();
  });

  it("should fire close gate button if gate is open and unlocked", () => {
    const { getByText } = render(
      <Controls closed={false} locked={false} toggleClosed={mockFunction} />
    );

    const gateBtn = getByText(/Close Gate/i);

    fireEvent.click(gateBtn);

    expect(mockFunction).toHaveBeenCalled();
  });

  it('button should display "Lock Gate" if gate is closed and unlocked', () => {
    const { getByText } = render(<Controls closed={true} locked={false} />);

    expect(getByText("Lock Gate")).toBeInTheDocument();
  });

  it('button should display "Unlock Gate" if gate is closed and locked', () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);

    expect(getByText("Unlock Gate")).toBeInTheDocument();
  });

  it('should default to a disabled lock button display "Close Gate" on gate button', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);

    const lockBtn = getByText(/Lock Gate/i);

    expect(lockBtn.disabled).toBeTruthy();
    expect(getByText(/Close Gate/i)).toBeInTheDocument();
  });

  it('should disable gate button and display "Unlock Gate" on lock button if the gate is locked and closed', () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);

    const gateBtn = getByText(/Open Gate/i);

    expect(getByText("Unlock Gate")).toBeInTheDocument();
    expect(gateBtn.disabled).toBeTruthy();
  });
});

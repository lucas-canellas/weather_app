/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";

import { HeaderSection } from "./HeaderSection";

describe("HeaderSection", () => {
  it("the modal must initially be closed", () => {
    const { getByTestId } = render(<HeaderSection />);
    const modal = getByTestId("modal");

    expect(modal).toHaveAttribute("aria-hidden", "true");
    expect(modal).toHaveStyle("opacity: 0");
  });

  it("should be  open modal", () => {
    const { getByTestId } = render(<HeaderSection />);
    const button = getByTestId("open_modal");

    fireEvent.click(button);

    const modal = getByTestId("modal");

    expect(modal).toHaveAttribute("aria-hidden", "false");
    expect(modal).toHaveStyle("opacity: 1");
  });

  it("should be closed modal", () => {
    const { getByTestId } = render(<HeaderSection />);
    const button = getByTestId("close_modal");

    fireEvent.click(button);

    const modal = getByTestId("modal");

    expect(modal).toHaveAttribute("aria-hidden", "true");
    expect(modal).toHaveStyle("opacity: 0");
  });

  it("when press ESC, close modal", () => {
    const { getByTestId } = render(<HeaderSection />);

    fireEvent.keyDown(window, { key: "Escape" });
    const modal = getByTestId("modal");

    expect(modal).toHaveAttribute("aria-hidden", "true");
    expect(modal).toHaveStyle("opacity: 0");
  });
});

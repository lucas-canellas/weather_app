/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen } from "@testing-library/react";

import { HeaderSectionModal } from "./HeaderSectionModal";

describe("HeaderSectionModal", () => {
  it("Should be invisible when isOpen is false", () => {
    render(
      // eslint-disable-next-line prettier/prettier
      <HeaderSectionModal isOpen={false} setIsOpen={() => { }} />
    );
    expect(screen.getByTestId("modal")).not.toBeVisible();
  });

  it("Should be visible when isOpen is true", () => {
    render(
      // eslint-disable-next-line prettier/prettier
      <HeaderSectionModal isOpen={true} setIsOpen={() => { }} />
    );
    expect(screen.getByTestId("modal")).toBeVisible();
  });

  it("when click close button, close modal", () => {
    // eslint-disable-next-line prettier/prettier
    render(<HeaderSectionModal isOpen={false} setIsOpen={() => { }} />);

    const button = screen.getByTestId("close_modal");

    fireEvent.click(button);

    expect(screen.getByTestId("modal")).not.toBeVisible();
  });
});

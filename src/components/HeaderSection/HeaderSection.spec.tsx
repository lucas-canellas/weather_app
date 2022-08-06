/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";

import { HeaderSection } from "./HeaderSection";

describe("HeaderSection", () => {
  it("when clicked should open modal", () => {
    const { getByTestId } = render(<HeaderSection />);
    const button = getByTestId("open_modal");

    fireEvent.click(button);

    expect(getByTestId("modal")).toBeVisible();
  });
});

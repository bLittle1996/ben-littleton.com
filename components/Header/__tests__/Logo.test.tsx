import { getByLabelText, getByText, render } from "@testing-library/react";
import Logo from "../Logo";

describe(Logo, () => {
  it("contains only the initials BL", () => {
    const { container } = render(<Logo />);

    expect(getByText(container, "BL", { exact: true })).toBeInTheDocument();
  });

  it("has an accessible label 'Ben Littleton'", () => {
    const { container } = render(<Logo />);

    expect(
      getByLabelText(container, "Ben Littleton", { exact: true })
    ).toBeInTheDocument();
  });
});

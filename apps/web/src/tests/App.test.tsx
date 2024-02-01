import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "~/App";

describe("App", () => {
  it('renders "Hello, Frontend!" text', () => {
    render(<App />);
    const helloWorldText = screen.getByText(/Hello, Frontend!/i);
    expect(helloWorldText).toBeInTheDocument();
  });

  it("has the correct class name", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveClass("text-3xl font-bold underline");
  });
});

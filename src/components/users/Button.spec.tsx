import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("should render a link when href prop is provided", () => {
    render(<Button href="https://example.com" text="Click me" />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://example.com"
    );
  });

  it("should call onClick function when clicked", () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick} text="Click me" />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should render the text prop", () => {
    render(<Button text="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should have the correct CSS classes", () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium text-white bg-primary rounded-full w-full sm:w-auto min-w-[200px] max-w-[300px] hover:bg-[#0077cc] transition-colors duration-200 mx-auto"
    );
  });
});

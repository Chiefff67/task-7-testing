import { render, screen } from "@testing-library/react";
import { InputField } from "../InputField";

describe("InputField", () => {
  it("should render an input field when type is not textarea", () => {
    render(<InputField label="Name" id="name-input" />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toHaveAttribute("type", "text");
  });

  it("should render a textarea when type is textarea", () => {
    render(<InputField label="Message" type="textarea" id="message-input" />);
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByLabelText("Message").tagName).toBe("TEXTAREA");
  });


  it("should have the correct CSS classes", () => {
    render(<InputField label="Name" id="name-input" />);
    const inputField = screen.getByLabelText("Name");
    expect(inputField).toHaveClass(
      "w-full px-3 py-2 sm:py-3 bg-white rounded-md border border-solid border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    );
  });
});

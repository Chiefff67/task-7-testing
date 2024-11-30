import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
  it("should render the icon, title, and description", () => {
    render(
      <Card
        icon="/icon.svg"
        title="Card Title"
        description="Card Description"
      />
    );
    expect(screen.getByAltText("Card Title icon")).toBeInTheDocument();
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
  });

  it("should have the correct CSS classes", () => {
    render(
      <Card
        icon="/icon.svg"
        title="Card Title"
        description="Card Description"
      />
    );
    const card = screen.getByRole("article");
    const styledDiv = card.querySelector("div");
    expect(styledDiv).toHaveClass(
      "bg-neutral-50 shadow-[4px_4px_3px_rgba(0,0,0,0.2)] sm:shadow-[6px_6px_4px_rgba(0,0,0,0.25)] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
    );
  });

});

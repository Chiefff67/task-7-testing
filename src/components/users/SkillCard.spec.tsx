import { render, screen } from "@testing-library/react";
import SkillCard from "../SkillCard";

describe("SkillCard", () => {
  it("should render the icon, title, and description correctly", () => {
    render(
      <SkillCard
        icon="/icon.svg"
        title="Skill Title"
        description="Skill Description"
      />
    );
    expect(screen.getByAltText("Skill Title icon")).toBeInTheDocument();
    expect(screen.getByText("Skill Title")).toBeInTheDocument();
    expect(screen.getByText("Skill Description")).toBeInTheDocument();
  });

  it("should have the correct CSS classes", () => {
    render(
      <SkillCard
        icon="/icon.svg"
        title="Skill Title"
        description="Skill Description"
      />
    );
    const card = screen.getByRole("article");
    const innerDiv = card.querySelector("div"); // Seleksi elemen <div> di dalam <article>
    expect(innerDiv).toHaveClass(
      "bg-neutral-50 shadow-[4px_4px_3px_rgba(0,0,0,0.2)] sm:shadow-[6px_6px_4px_rgba(0,0,0,0.25)] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
    );
  });



});

import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";

describe("ProjectCard", () => {
  it("should render the image correctly", () => {
    render(
      <ProjectCard
        imageSrc="https://example.com/project.jpg"
        imageAlt="Project image"
      />
    );
    const image = screen.getByAltText("Project image");
    expect(image).toHaveAttribute("src", "https://example.com/project.jpg");
  });

  it("should have the correct CSS classes", () => {
    const { container } = render(
      <ProjectCard
        imageSrc="https://example.com/project.jpg"
        imageAlt="Project image"
      />
    );
    const card = container.querySelector(
      ".w-full.max-w-sm.mx-auto.overflow-hidden.rounded-lg.shadow-md.hover\\:shadow-xl.transition-all.duration-300.cursor-pointer"
    );
    expect(card).toBeInTheDocument();
  });



  it("should have the image scale on hover", () => {
    render(
      <ProjectCard
        imageSrc="https://example.com/project.jpg"
        imageAlt="Project image"
      />
    );
    const image = screen.getByAltText("Project image");
    expect(image).toHaveClass(
      "absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    );
  });
});

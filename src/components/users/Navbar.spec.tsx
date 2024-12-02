import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  afterEach(() => {
    window.innerWidth = 1024; 
    window.dispatchEvent(new Event("resize"));
    jest.resetAllMocks();
  });

  it("should render the navbar with all navigation links", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const links = ["Home Page", "Projects", "About", "Contact Me"];
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("should highlight the active link based on the current path", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <Navbar />
      </MemoryRouter>
    );

    const activeLink = screen.getByText("Projects");
    expect(activeLink).toHaveClass("text-black font-light");
  });

  it("should render the close button with 'Close menu' label when the mobile menu is open", () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const menuButton = screen.getByLabelText("Open menu");
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-label", "Close menu");
  });

  it("should render the open button with 'Open menu' label when the mobile menu is closed", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const menuButton = screen.getByLabelText("Open menu");
    expect(menuButton).toHaveAttribute("aria-label", "Open menu");
  });
});

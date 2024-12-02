import { render, screen } from "@testing-library/react";
import Footer from "../Footer"; // Sesuaikan dengan path Anda
import { BrowserRouter as Router } from "react-router-dom"; // Untuk mengatasi Link

describe("Footer", () => {
  it("should render the footer content", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    expect(
      screen.getByText("© 2024 Syarif Maulana, All Rights Reserved")
    ).toBeInTheDocument();
  });

  it("should render social media links", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const instagramLink = screen.getByRole("link", { name: /instagram/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    const githubLink = screen.getByRole("link", { name: /github/i });

    expect(instagramLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });


  it("should have correct aria attributes for accessibility", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const instagramIcon = screen.getByLabelText("Instagram");
    const linkedinIcon = screen.getByLabelText("LinkedIn");
    const githubIcon = screen.getByLabelText("GitHub");

    expect(instagramIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });

});

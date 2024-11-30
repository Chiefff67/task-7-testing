import { render, screen, fireEvent } from "@testing-library/react";
import ImageSlider from "../ImageSlider";

const testImages = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
];

describe("ImageSlider", () => {
  it("should render the current slide image", () => {
    render(<ImageSlider images={testImages} />);
    expect(screen.getByAltText("Slide 1")).toBeInTheDocument();
  });

  it("should navigate to the next slide when the next button is clicked", () => {
    render(<ImageSlider images={testImages} />);
    const nextButton = screen.getByLabelText("Next slide");
    fireEvent.click(nextButton);
    expect(screen.getByAltText("Slide 2")).toBeInTheDocument();
  });

  it("should navigate to the previous slide when the previous button is clicked", () => {
    render(<ImageSlider images={testImages} />);
    const prevButton = screen.getByLabelText("Previous slide");
    fireEvent.click(prevButton);
    expect(screen.getByAltText("Slide 3")).toBeInTheDocument();
  });

  it("should navigate to the next slide when swiping right", () => {
    render(<ImageSlider images={testImages} />);
    const slider = screen.getByRole("region", { name: "Image Slider" });
    fireEvent.touchStart(slider, { targetTouches: [{ clientX: 100 }] });
    fireEvent.touchMove(slider, { targetTouches: [{ clientX: 0 }] });
    fireEvent.touchEnd(slider);

    // Tambahkan assertions untuk memverifikasi slide berubah
    expect(screen.getByAltText("Slide 2")).toBeInTheDocument();
  });


  it("should navigate to the previous slide when swiping left", () => {
    render(<ImageSlider images={testImages} />);
    const slider = screen.getByRole("region", { name: "Image Slider" });
    fireEvent.touchStart(slider, { targetTouches: [{ clientX: 0 }] });
    fireEvent.touchMove(slider, { targetTouches: [{ clientX: 100 }] });
    fireEvent.touchEnd(slider);
    expect(screen.getByAltText("Slide 3")).toBeInTheDocument();
  });

  it("should not render images if no images are provided", () => {
    render(<ImageSlider images={[]} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});

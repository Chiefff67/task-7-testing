import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {ImageSliderProps} from "../types/types";


const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  variant = "poster",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) {
    return null; // Tidak merender apa pun jika images kosong
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const sliderStyles = {
    poster:
      "max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-[450px] sm:h-[600px] md:h-[750px]",
    ui: "max-w-[350px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1024px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]",
  };

  return (
    <div
      ref={sliderRef}
      role="region"
      aria-label="Image Slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full mx-auto ${sliderStyles[variant]} overflow-hidden rounded-lg transition-all duration-300`}
    >
      {/* Gambar */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-contain rounded-lg shadow-md"
      />

      {/* Tombol Navigasi Kiri */}
      <div className="absolute top-1/2 left-1 sm:left-2 md:left-4 -translate-y-1/2 cursor-pointer z-10">
        <button
          onClick={prevSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Tombol Navigasi Kanan */}
      <div className="absolute top-1/2 right-1 sm:right-2 md:right-4 -translate-y-1/2 cursor-pointer z-10">
        <button
          onClick={nextSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Indikator Pagination */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

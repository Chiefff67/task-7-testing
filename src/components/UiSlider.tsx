import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
}

const UiSlider: React.FC<ImageSliderProps> = ({ images }) => {
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

  return (
    <div
      ref={sliderRef}
      role="region"
      aria-label="Image Slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full mx-auto max-w-[1024px] h-[600px] overflow-hidden rounded-xl"
    >
      {/* Gambar */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-contain rounded-lg shadow-md"
      />

      {/* Tombol Navigasi Kiri */}
      <div className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 cursor-pointer z-10">
        <button
          onClick={prevSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Tombol Navigasi Kanan */}
      <div className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 cursor-pointer z-10">
        <button
          onClick={nextSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Indikator Pagination */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UiSlider;

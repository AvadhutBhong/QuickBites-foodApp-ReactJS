import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
function Featured() {
  const slider = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  function handleLeftCarousel() {
    const isFirstSlide = currentIndex === 0;
    const nextIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  }

  function handleRightCarousel() {
    const isLastSlide = currentIndex === slider.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  const moveToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  // setInterval(() => {
  //   handleRightCarousel();
  // }, 5000);

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700  text-white cursor-pointer">
        <FaChevronLeft onClick={handleLeftCarousel} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700  text-white cursor-pointer">
        <FaChevronRight onClick={handleRightCarousel} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slider.map((sliderItem, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => moveToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;

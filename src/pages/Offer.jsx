import { useState } from 'react';

export const Offer = (slide) => {
  const slides = [
    { url: '../Assets/obat1.png', title: '1' },
    { url: '../Assets/obat2.png', title: '2' },
    { url: '../Assets/obat3.png', title: '3' },
    { url: '../Assets/obat4.png', title: '4' },
    { url: '../Assets/obat5.png', title: '5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="offer">
      <h1 className="box-model1">Special For You</h1>
      <br />
      <div className="containerStyles">
        <div className="sliderStyles">
          <div></div>
          <div className="slideStyles" style={slideStylesWidthBackground}>
            <div onClick={goToPrevious} className="leftArrowStyles">
              ❰
            </div>
            <div onClick={goToNext} className="rightArrowStyles">
              ❱
            </div>
          </div>
          <div className="dotsContainerStyles">
            {slides.map((slide, slideIndex) => (
              <div className="dotStyle" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                ●
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

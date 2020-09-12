import React, { useState } from "react";
import "./Slider.css";
import ImgComp from "./ImgComp";
import i1 from "./pics/i1.jpg";
import i2 from "./pics/i2.jpg";
import i3 from "./pics/i3.png";
import i4 from "./pics/i4.jpg";
import i5 from "./pics/i5.jpg";
import i6 from "./pics/i6.jpg";
import i7 from "./pics/i7.jpg";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Slider() {
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
    <ImgComp src={i6} />,
    <ImgComp src={i7} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <ChevronLeftIcon />
      </button>
      <button id="goRight" onClick={goRight}>
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default Slider;

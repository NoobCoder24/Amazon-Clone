import React from "react";
import './ImgComp.css';

function ImgComp({ src }) {
    let imgStyles={
        width:100 +"%",
        height:"auto"
    }
  return (
    <div className="imgcomp">
      <img className="home_image" src={src} alt="slide-image" style={imgStyles} />
    </div>
  );
}

export default ImgComp;
